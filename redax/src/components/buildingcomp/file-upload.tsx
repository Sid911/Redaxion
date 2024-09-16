// import { cn } from "@/lib/utils";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { IconUpload, IconX } from "@tabler/icons-react";
// import { useDropzone } from "react-dropzone";

// const mainVariant = {
//   initial: {
//     x: 0,
//     y: 0,
//   },
//   animate: {
//     x: 20,
//     y: -20,
//     opacity: 0.9,
//   },
// };

// const secondaryVariant = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//   },
// };

// type FileItem = {
//   file: File;
//   id: string;
// };

// export const FileUpload = ({
//   onChange,
// }: {
//   onChange?: (files: File[]) => void;
// }) => {
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const generateFileId = (file: File) => {
//     return `${file.name}-${file.lastModified}-${file.size}`;
//   };

//   const handleFileChange = (newFiles: File[]) => {
//     const updatedFiles = newFiles.map((file) => ({
//       file,
//       id: generateFileId(file),
//     }));

//     setFiles((prevFiles) => {
//       const combinedFiles = [...prevFiles, ...updatedFiles];
//       const uniqueFiles = combinedFiles.filter(
//         (item, index, self) =>
//           index === self.findIndex((t) => t.id === item.id)
//       );
//       onChange && onChange(uniqueFiles.map((item) => item.file));
//       return uniqueFiles;
//     });
//   };

//   const handleRemoveFile = (id: string) => {
//     setFiles((prevFiles) => {
//       const updatedFiles = prevFiles.filter((item) => item.id !== id);
//       onChange && onChange(updatedFiles.map((item) => item.file));
//       return updatedFiles;
//     });
//   };

//   const handleClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//       fileInputRef.current.click();
//     }
//   };

//   const { getRootProps, isDragActive } = useDropzone({
//     multiple: false,
//     noClick: true,
//     onDrop: handleFileChange,
//     onDropRejected: (error) => {
//       console.log(error);
//     },
//   });

//   return (
//     <div className="w-full" {...getRootProps()}>
//       <motion.div
//         onClick={handleClick}
//         whileHover="animate"
//         className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
//       >
//         <input
//           ref={fileInputRef}
//           id="file-upload-handle"
//           type="file"
//           onChange={(e) =>
//             handleFileChange(Array.from(e.target.files || []))
//           }
//           className="hidden"
//         />
//         <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
//           <GridPattern />
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
//             Upload file
//           </p>
//           <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
//             Drag or drop your files here or click to upload
//           </p>
//           <div className="relative w-full mt-10 max-w-xl mx-auto">
//             {files.length > 0 &&
//               files.map(({ file, id }) => (
//                 <motion.div
//                   key={id}
//                   layoutId={`file-upload-${id}`}
//                   className={cn(
//                     "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
//                     "shadow-sm"
//                   )}
//                 >
//                   <div className="flex justify-between w-full items-center gap-4">
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       layout
//                       className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
//                     >
//                       {file.name}
//                     </motion.p>
//                     <div className="flex items-center gap-2">
//                       <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         layout
//                         className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
//                       >
//                         {(file.size / (1024 * 1024)).toFixed(2)} MB
//                       </motion.p>
//                       <motion.button
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleRemoveFile(id);
//                         }}
//                         className="p-1 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
//                       >
//                         <IconX className="h-4 w-4" />
//                         <span className="sr-only">Remove file</span>
//                       </motion.button>
//                     </div>
//                   </div>

//                   <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       layout
//                       className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 "
//                     >
//                       {file.type}
//                     </motion.p>

//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       layout
//                     >
//                       modified{" "}
//                       {new Date(file.lastModified).toLocaleDateString()}
//                     </motion.p>
//                   </div>
//                 </motion.div>
//               ))}
//             {!files.length && (
//               <motion.div
//                 layoutId="file-upload"
//                 variants={mainVariant}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className={cn(
//                   "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
//                   "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
//                 )}
//               >
//                 {isDragActive ? (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-neutral-600 flex flex-col items-center"
//                   >
//                     Drop it
//                     <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
//                   </motion.p>
//                 ) : (
//                   <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
//                 )}
//               </motion.div>
//             )}

//             {!files.length && (
//               <motion.div
//                 variants={secondaryVariant}
//                 className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
//               ></motion.div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export function GridPattern() {
//   const columns = 41;
//   const rows = 11;
//   return (
//     <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
//       {Array.from({ length: rows }).map((_, row) =>
//         Array.from({ length: columns }).map((_, col) => {
//           const index = row * columns + col;
//           return (
//             <div
//               key={`${col}-${row}`}
//               className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
//                 index % 2 === 0
//                   ? "bg-gray-50 dark:bg-neutral-950"
//                   : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,0.05)]"
//               }`}
//             />
//           );
//         })
//       )}
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconUpload, IconX, IconEye } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

type FileItem = {
  file: File;
  id: string;
};

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [previewFile, setPreviewFile] = useState<FileItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateFileId = (file: File) => {
    return `${file.name}-${file.lastModified}-${file.size}`;
  };

  const handleFileChange = (newFiles: File[]) => {
    const updatedFiles = newFiles.map((file) => ({
      file,
      id: generateFileId(file),
    }));

    setFiles((prevFiles) => {
      const combinedFiles = [...prevFiles, ...updatedFiles];
      const uniqueFiles = combinedFiles.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.id === item.id)
      );
      onChange && onChange(uniqueFiles.map((item) => item.file));
      return uniqueFiles;
    });
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((item) => item.id !== id);
      onChange && onChange(updatedFiles.map((item) => item.file));
      return updatedFiles;
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isDialogOpen && fileInputRef.current && !e.defaultPrevented) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  const handlePreview = (fileItem: FileItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewFile(fileItem);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) =>
            handleFileChange(Array.from(e.target.files || []))
          }
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
            Upload file
          </p>
          <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
            Drag or drop your files here or click to upload
          </p>
          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {files.length > 0 &&
              files.map(({ file, id }) => (
                <motion.div
                  key={id}
                  layoutId={`file-upload-${id}`}
                  className={cn(
                    "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                    "shadow-sm"
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between w-full items-center gap-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs"
                    >
                      {file.name}
                    </motion.p>
                    <div className="flex items-center gap-2">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        layout
                        className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                      >
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </motion.p>
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => handlePreview({ file, id }, e)}
                            className="p-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                          >
                            <IconEye className="h-4 w-4" />
                            <span className="sr-only">Preview file</span>
                          </motion.button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <FilePreview file={file} />
                        </DialogContent>
                      </Dialog>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile(id);
                        }}
                        className="p-1 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                      >
                        <IconX className="h-4 w-4" />
                        <span className="sr-only">Remove file</span>
                      </motion.button>
                    </div>
                  </div>

                  <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 "
                    >
                      {file.type}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                    >
                      modified{" "}
                      {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 flex flex-col items-center"
                  >
                    Drop it
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FilePreview = ({ file }: { file: File }) => {
  const [preview, setPreview] = useState<string | null>(null);

  React.useEffect(() => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">File Preview</h3>
      {preview ? (
        <img src={preview} alt="File preview" className="max-w-full h-auto" />
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
          <p className="text-center">No preview available for this file type.</p>
        </div>
      )}
      <div className="mt-4">
        <p><strong>Name:</strong> {file.name}</p>
        <p><strong>Type:</strong> {file.type}</p>
        <p><strong>Size:</strong> {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
        <p><strong>Last Modified:</strong> {new Date(file.lastModified).toLocaleString()}</p>
      </div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,0.05)]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}