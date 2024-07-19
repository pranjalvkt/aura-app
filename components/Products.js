"use client";
import Card from "@/components/Card";
import prod from './prod.json'
export default function Products() {
    return (
        <>
            {
                prod.products.map((item)=>(
                    <Card key={item.id} data={item}/>
                ))
            }
        </>
    );
  }