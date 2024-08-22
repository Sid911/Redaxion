'use client'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../ui/button'
// import TextShimmer from './text-shimmer'
import { BorderBeam } from '../magicui/border-beam'
import Image from 'next/image'
import heroLight from '@/public/hero-light.png'
import heroDark from '@/public/hero-dark.png'
import TextShimmer from '../buildingcomp/text-shimmer'
import { TabsDemo } from '../tabsEx'

export default function HeroSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })
    return (
        <section
            id="hero"
            className="relative mx-auto mt-16 max-w-7xl px-6 text-center md:px-8"
        >
            <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-7xl dark:from-white dark:to-white/40">
                Effortless and Secure Redaction
                <br className="hidden md:block" />
                {' '}
                for Your Sensitive Data
            </h1>
            <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
                Redact, Mask, and Anonymize with Precision
                <br className="hidden md:block" />
                {' '}
                Customize Your Data Protection with Just a Few Clicks
            </p>
            {/* <Button className="animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
                <span>Get Started for free </span>
                <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button> */}
            <div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-lg border dark:border-white/10  border-black/10 bg-black/5 dark:bg-white/10 px-3 text-base text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black py-4">
                <TextShimmer className="inline-flex items-center justify-center">
                    <span>✨ Get Started</span>
                    {' '}
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </TextShimmer>
            </div>
            {/* <div
            ref={ref}
            className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] [perspective:2000px] ]"
            >
            <TabsDemo/>
            </div> */}
            <div
                ref={ref}
                className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] [perspective:2000px] ]"
            >
                <div
                    className={`before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${inView ? 'before:animate-image-glow' : ''
                        }`}
                >
                    <TabsDemo />
                </div>
            </div>
        </section>
    )
}
