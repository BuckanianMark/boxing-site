import Logo from "../assets/gloves-1.png"
const HomePage = () => {
  return (
    <div className="mt-5 w-[100%]">
      <div className="flex items-center">
        <div>
        <h1 className="text-xl font-[200] text-emerald-600">Welcome To BoxiLads</h1>
      <h2 className="text-lg text-gray-700 font-[300]">Where fists are exchanged with Passion</h2>
      <h2 className="text-gray-800 font-[300]">Horn Your Skills and Pound Your oponent</h2>
        </div>
        <div className="image-container p-4">
        <img src={Logo} alt="Boxing" width={200}  className="hidden sm:flex"/>

        </div>
      
      </div>
     
      <div>
        <h2 className="font-bold border-b-2 w-max text-emerald-800 border-emerald-800 mt-5">History</h2>
      <p className="text-gray-800 text-md">Boxing has deep roots in Manchester, England, dating back to the early 19th century. The city&#39;s working-class population embraced the sport, leading to the establishment of numerous boxing clubs and venues. Manchester became a hotbed for boxing, hosting many significant matches and producing numerous talented fighters.

One of Manchester&#39;s most iconic boxing venues is the Belle Vue Stadium, which hosted countless memorable fights throughout the 20th century. Legendary boxers such as Len Johnson, who fought against racial discrimination in the sport, and Ricky Hatton, a beloved world champion, hail from Manchester.

In the modern era, Manchester continues to play a prominent role in British boxing. The city has produced a new generation of champions, including Anthony Crolla and Tyson Fury. Manchester Arena, a major venue in the city, regularly hosts high-profile boxing events, drawing large crowds and maintaining Manchester&#39;s reputation as a boxing powerhouse</p>
      </div>
    </div>
    // Page 1 Home: landing page with some motivational quotes and a brief history on boxing in Manchester and a live side bar where it shows you tweets from Twitter that have the hashtag of boxing 
  )
}

export default HomePage