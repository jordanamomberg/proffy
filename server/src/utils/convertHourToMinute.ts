export default function convertHourToMinute(time: string) {
   //8:00 

   //split vai retornar [8, 0]
    
   const [hour, minutes] = time.split(':').map(Number);
   const timeInMinutes = (hour * 60) + minutes;

   return timeInMinutes;
}