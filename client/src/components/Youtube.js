import React from 'react'

const Youtube = () => {
  return (
    <>
        {/* <!-------------------------------------------- Youtube Video Section -----------------------------------------> */}
        <p class="text-center font-extrabold text-4xl mt-5 p-5"> Get Information about skin diseases through videos. </p>
        <div style={{overflow: 'hidden', overflowX: 'auto'}} class="scrollbar-hide ">
            <div class="flex flex-row md:gap-5 m-2 ml-2">
                <div class="p-2">
                    <iframe width="300" 
                            height="200" 
                            class="rounded-lg"
                            src="https://www.youtube.com/embed/zQGOcOUBi6s" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>         
                </div>
                <div class="p-2">
                    <iframe width="300" 
                            height="200" 
                            class="rounded-lg "
                            src="https://www.youtube.com/embed/ryox2SQKQPU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div class="p-2">
                    <iframe width="300" 
                            height="200" 
                            class="rounded-lg"
                            src="https://www.youtube.com/embed/Qa7WrWNmXug" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div class="p-2">
                    <iframe width="300" 
                            height="200" 
                            class="rounded-lg"
                            src="https://www.youtube.com/embed/_VhcZTGv0CU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div class="p-2">
                    <iframe width="300" 
                            height="200" 
                            class="rounded-lg"
                            src="https://www.youtube.com/embed/Dx3iF8-nmkM" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div class="p-2">
                    <iframe width="300" 
                            height="200" 
                            class="rounded-lg"
                            src="https://www.youtube.com/embed/oXKRCG-3z9k" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>            
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Youtube