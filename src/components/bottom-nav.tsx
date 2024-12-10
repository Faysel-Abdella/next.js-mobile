'use client'
import React from 'react'
import { Icons } from './ui/icons'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const pageLinks = [
    { name: "홈", Icon: Icons.home, path: "/home" },
    { name: "상점", Icon: Icons.cart, path: "/store" },
    { name: "멤버쉽", Icon: Icons.scan, path: "/receipt" },
    { name: "포인트 샵", Icon: Icons.badge, path: "/shop" },
    { name: "눈치게임", Icon: Icons.star, path: "/game" },
]

export default function BottomNav() {
    const pathname = usePathname()
    return (
        <div className="w-full h-full bg-white border-t">
            <div className="flex justify-between px-8 py-4">
                {pageLinks.map((link, idx) => (
                    <Link href={link.path} key={`${link.path}-${idx}`} className={cn("flex flex-col items-center gap-1", pathname.startsWith(link.path) ? " text-[#FF6B5B]" : " text-gray-400")}>
                        <link.Icon active={pathname.startsWith(link.path)} className="size-7" />
                        <span className="text-xs">{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
