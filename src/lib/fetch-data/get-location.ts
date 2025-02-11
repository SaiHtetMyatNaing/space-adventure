import { IPGeoLocation } from "../types/geo-location";

type IpLocationResponse = {
    success : true;
    data : IPGeoLocation;
} | {
    success : false;
    error : string;
}
// fetchingting ipAddress by "ipify.org"
export async function getIpAddress() : Promise<IpLocationResponse>  {

    try {
      const response = await fetch('http://ip-api.com/json/?fields=61439',{
        cache : 'no-cache'
      });
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch location: ${response.status} ${response.statusText}`
        );
      }
  
      const getLocation = (await response.json()) as IPGeoLocation;
      return {
         success : true,
         data :  getLocation
      }
      
      } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
        
        return {
            success : false,
            error : error instanceof Error ? error.message : 'Something went wrong'
        }
    }
  }

