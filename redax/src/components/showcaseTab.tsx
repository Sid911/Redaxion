'use client';
import { Compare } from './buildingcomp/compare';
import { BrowserComponent } from './buildingcomp/mock-browser';

export function TextEx() {
    return (
        <div className="flex  justify-center items-center">
            <BrowserComponent Url="Redaxion.com/text" className={'w-full max-w-[800px] h-[600px]'}>
                <section className={'w-full h-full flex items-center justify-center p-4'}>
                    <Compare
                        firstImage="/new1.jpg"
                        secondImage="/new-redacted1.jpg"
                        firstImageClassName="object-cover object-left-top w-full"
                        secondImageClassname="object-cover object-left-top w-full"
                        className="w-full h-full rounded-[22px] md:rounded-lg"
                        slideMode="hover"
                        autoplay={true}
                    />
                </section>
                {/* <BorderBeam  /> */}
            </BrowserComponent>

        </div>
    )
}
export function ImageEx() {
    return (
        <div className="flex justify-center items-center">
            <BrowserComponent Url="Redaxion.com/image" className={'w-full max-w-[800px] h-[600px]'}>
                <section className={'w-full h-full flex items-center justify-center p-4'}>
                    <Compare
                        firstImage="/Img.jpg"
                        secondImage="/RedactedImg.jpg"
                        firstImageClassName="object-cover object-left-top w-full"
                        secondImageClassname="object-cover object-left-top w-full"
                        className="w-full h-full rounded-[22px] md:rounded-lg"
                        // className="h-[250px] w-[200px] md:h-[500px] md:rounded-lg md:w-[1000px]"
                        slideMode="hover"
                        autoplay={true}
                    />
                </section>
            </BrowserComponent>

        </div>
    )
}
