"use client";

import { Bell, FileText, Search, Settings, User, Plus, Eye, Download, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import React, { useState } from "react";
import { FileUpload } from "@/components/buildingcomp/file-upload";
import { PlaceholdersAndVanishInput } from "@/components/buildingcomp/placeholders-and-vanish-input";
import { BorderBeam } from '../magicui/border-beam';
export default function Dashboard() {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };
    const placeholders = [
        "Erase confidential data from this document.",
        "Anonymize this image with precision.",
        "Scrub personal details from this text file.",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                {/* <a className="flex items-center justify-center" href="#">
                    <FileText className="h-6 w-6" />
                    <span className="sr-only">Redact</span>
                    
                </a> */}
                <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                    <Button variant="ghost" size="icon">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                        <span className="sr-only">Settings</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-4 w-4" />
                        <span className="sr-only">Profile</span>
                    </Button>
                </nav>
            </header>
            <main className="flex-1 p-4 lg:p-6">
                {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                            <FileText className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Redacted Documents</CardTitle>
                            <Eye className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">867</div>
                            <p className="text-xs text-muted-foreground">+15.5% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                            <Search className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">123</div>
                            <p className="text-xs text-muted-foreground">-5% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">Recent Documents</CardTitle>
                            <Download className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45.8 GB</div>
                            <p className="text-xs text-muted-foreground">You have {6} documents in the last 7 days</p>
                            <Button className='mt-4 w-full'>
                                See recent documents
                            </Button>

                        </CardContent>
                    </Card>
                </div> */}
                {/* <div className="w-full pb-8 mt-16 max-w-4xl mx-auto min-h-[32rem] border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <FileUpload onChange={handleFileUpload} />
                  
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                
                    <BorderBeam size={200} duration={12} delay={9} />
                </div> */}
                <div className="w-full pb-8 mt-16 max-w-4xl mx-auto min-h-[30rem] border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg flex flex-col justify-between">
      <div className="p-4">
        <FileUpload onChange={handleFileUpload} />
      </div>
      
      <div className="mt-auto p-4">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
                {/* <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                /> */}
                {/* <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
                    <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and operations.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Upload New Document
              </Button>
              <Button className="w-full" variant="outline">
                <Eye className="mr-2 h-4 w-4" /> Review Pending Documents
              </Button>
              <Button className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download Redacted Documents
              </Button>
              <Button className="w-full" variant="outline">
                <Trash2 className="mr-2 h-4 w-4" /> Manage Trash
              </Button>
            </CardContent>
          </Card>

                </div> */}
            </main>
        </div>
    )
}


