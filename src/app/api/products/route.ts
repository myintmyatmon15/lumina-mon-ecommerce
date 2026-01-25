import { NextResponse } from 'next/server';
import { products } from '@/src/data/products'; 
export async function GET() {
  return NextResponse.json(products);
}