import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient();
  try {
    // Check if the request has a valid content type before parsing JSON
    if (request.headers.get("content-type")?.includes("application/json")) {
      const requestBody = await request.json();
      return new Response(`Key: ${requestBody.key}, ENV: ${process.env.NEXT_PUBLIC_APIKEY}, Body: ${requestBody !==null}`);
      if (requestBody !== null && requestBody.key === process.env.NEXT_PUBLIC_APIKEY) {
        const logData = {
          broswer: requestBody.browser,
          device: requestBody.device,
          os: requestBody.os,
          ip: requestBody.ip,
        };

        //console.log(logData);
        const log = await prisma.log.create({
          data: logData,
        });
        return new Response(JSON.stringify(log));
      }
      return new Response("Invalid Key or request");
    } else {
      return new Response("Invalid content type, JSON not parsed");
    }
  } catch (error) {
    //console.log(error)
    return new Response("Error while parsing JSON");
  }
}

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  const query = request.nextUrl.searchParams;
  if (query) {
    const key = query.get("key");
    if (key === process.env.APIKEY) {
      const data = await prisma.log.findMany();
      //console.log(data);
      return new Response(JSON.stringify(data));
    }
  }

  return new Response("Error, No Key");
}
