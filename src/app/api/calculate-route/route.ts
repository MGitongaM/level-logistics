
import { NextRequest, NextResponse } from "next/server"

interface Coordinates {
  lat: number;
  lon: number;
}

export async function POST(request:NextRequest){
    const apiKey=process.env.TOMTOM_API_KEY
    try {
        const{origin, destination}=await request.json()
        if(!origin || !destination){
            return NextResponse.json(
                {message:"Origin Location and Destination Location required"},
                {status:400}
            )
        }
        if(!apiKey){
            return NextResponse.json(
                {message:"Api Key configuration error, check if the key is present"},
                {status:500}
            )
        }
        // const originCoords=await geoCodesAddress(origin,apiKey)
        const originCoords = await geocodeAddress(origin, apiKey)



        const destinationCoords=await geocodeAddress(destination,apiKey)

        if(!originCoords || !destinationCoords){
            return NextResponse.json(
                {message:"Could not find coordinates for either or both of the locations "},
                {status:500}
            )
        }

        const routeResult= await calculateRoute(originCoords,destinationCoords,apiKey)
        if(!routeResult || !routeResult.routeData){
            return NextResponse.json(
                {message:"Couldn't calculate the distance between the two locations"},
                {status:500}
            )
        }
        const routeData={
            ...routeResult.routeData,
            geometry:routeResult.geometry,
            originCoords,
            destinationCoords
        }
        return NextResponse.json({routeData})
    } catch (error) {
        console.log("Error from the POST function on calculate route",error)
        return NextResponse.json(
            {message:"Server error on calculating route"},
            {status:500}
        )
    }
}

async function geocodeAddress(address:string, apiKey:string){
    try{
        const encodedAddress=encodeURIComponent(address)
        const url=`https://api.tomtom.com/search/2/search/${encodedAddress}.json?key=${apiKey}&limit=1`
        const response=await fetch(url)
        const data= await response.json()

        if(data.results && data.results.length>0){
            const position=data.results[0].position
            return{
                lat:position.lat,
                lon:position.lon
            }
        }
        return null
    }
    catch(error){
        console.log("Error in the geoCodeAddress function",error)
        return null
    }
}

async function calculateRoute(origin:Coordinates,destination:Coordinates,apiKey:string){
    try {
        const originCoord=`${origin.lat},${origin.lon}`
        const destinationCoord=`${destination.lat},${destination.lon}`

        // const url=`https://api.tomtom.com/routing/1/calculateRoute/${originCoord}:${destinationCoord}/json?.key${apiKey}&routeType=fastest&traffic=false&travelMode=truck`
        const url=`https://api.tomtom.com/routing/1/calculateRoute/${originCoord}:${destinationCoord}/json?key=${apiKey}&routeType=fastest&traffic=true&travelMode=truck`
        const response= await fetch(url)
        const data= await response.json()

        if(data.routes && data.routes.length>0){
            const route=data.routes[0]
            const summary=route.summary

            const geometry=[]
            if(route.legs  && route.legs.length>0){
                route.legs.forEach(leg=>{
                    if(leg.points){
                        leg.points.forEach(point=>{
                            geometry.push([point.longitude,point.latitude])
                        })
                    }
                })
            }
            return {
                routeData:{
                     lengthInMeters: summary.lengthInMeters,
          travelTimeInSeconds: summary.travelTimeInSeconds,
          trafficDelayInSeconds: summary.trafficDelayInSeconds || 0,
          departureTime: summary.departureTime,
          arrivalTime: summary.arrivalTime
                },
                geometry
            }
        }
        return null

    } catch (error) {
        console.log("Error in calculateRoute",error)
        return null
    }
}