"use client";
import { Tabs } from "../components/buildingcomp/tabs";
import { ImageEx, TextEx } from "./showcaseTab";
export function TabsDemo() {
    const tabs = [
        {
            title: "Text",
            value: "text",
            content: (
                <TextEx />
            ),
        },
        {
            title: "Image",
            value: "image",
            content: (
                <ImageEx />
            ),
        },
    ];
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}
