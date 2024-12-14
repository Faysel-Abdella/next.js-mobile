"use client"


import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ImageIcon, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const formSchema = z.object({
  title: z.string().min(1, {
    message: "제목을 입력해주세요.",
  }),
  content: z.string().min(1, {
    message: "내용을 입력해주세요.",
  }),
  images: z.array(z.any()).optional(),
})


export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      images: [],
    },
    mode: "onChange",
  })

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const isFormValid = form.formState.isValid && imagePreviews.length > 0;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formValues, setFormValues] = useState<z.infer<typeof formSchema> | null>(null);


  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormValues(values);
    setIsDialogOpen(true);
    console.log(values);
  }

  useEffect(() => {
    return () => {
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview))
    }
  }, [imagePreviews])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
    form.setValue('images', [...(form.getValues('images') || []), ...files]);
    form.trigger('images');
  }

  const removeImage = (index: number) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    const updatedImages = (form.getValues('images') || []).filter((_, i) => i !== index);
    form.setValue('images', updatedImages);
    form.trigger('images');
  }

  return (
    <div className="bg-white relative py-6 flex flex-col justify-between items-center h-full text-[#4D4D4D]">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">문의하기</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full p-5 space-y-4 flex flex-col ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
        <div className=" space-y-5">

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="gap-2.5">
                <FormLabel>제목</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="제목을 입력해 주세요" 
                    className="h-9 px-3 border-[#DADFE2] text-base placeholder:text-xs rounded-md placeholder:text-[#ADADAD] placeholder:font-light" 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>문의 내용</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="내용을 입력해 주세요" 
                    className="min-h-[180px] px-3 resize-none border-[#DADFE2] py-3 text-base placeholder:text-xs rounded-md placeholder:text-[#ADADAD] placeholder:font-light"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-wrap gap-2 items-start">
                    <div className="relative">
                      <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        id="image-upload"
                        multiple
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center w-[72px] h-[72px] bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <ImageIcon className="w-6 h-6 text-gray-500" />
                        <span className="mt-1 text-sm text-gray-500">사진</span>
                      </label>
                    </div>

                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative w-[72px] h-[72px] mx-1">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-contain rounded-lg bg-[#FFE9E9]"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-[#4D4D4D] rounded-full flex items-center justify-center"
                        >
                          <X className="size-4 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>


        <Button 
            disabled={!isFormValid}
            type="submit" 
            className={cn(
              "w-full h-11 text-base",
              isFormValid ? "bg-primary hover:bg-primary/90" : "bg-[#ADADAD]"
            )}
          >
            완료
          </Button>
        </form>
      </Form>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className=" max-w-xs items-center">
          <AlertDialogHeader className="flex justify-center gap-2 w-full">
            <Image src={'/images/success-icon.svg'} alt="point-history" width={200} height={200} className="size-12 self-center"/>
            <AlertDialogTitle className="py-1.5 text-md text-center font-medium">등록이 완료 되었어요.</AlertDialogTitle>
          </AlertDialogHeader >
          <AlertDialogFooter className="gap-2 content-stretch min-w-full">
            <AlertDialogAction className="w-full bg-primary" onClick={() => setIsDialogOpen(false)}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        
      </div>
    </div>
  );
}
