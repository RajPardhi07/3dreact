import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  useGSAP(() => {
    new ScrollTrigger({});

    tl.from(".first-text h1", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".first-text",
        start: "top 60%",
        end: "top 40%",
        scrub: 3
      }

    })
      .from(".first-text p", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: 2,
        scrollTrigger: {
          trigger: ".first-text",
          start: "top 60%",
          end: "top 40%",
          scrub: 3
        }

      })

    tl2.from(".second-text h1", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".second-text",
        start: "top 60%",
        end: "top 40%",
        scrub: 3
      }

    })
      .from(".second-text p", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: 2,
        scrollTrigger: {
          trigger: ".second-text",
          start: "top 60%",
          end: "top 40%",
          scrub: 3
        }

      })


  }, [])
  return (
    <section
      className="h-screen  relative">
      <div className="first-text overflow-hidden absolute w-full top-[80%] left-[0%] h-[50vw] xl:w-[30vw] xl:top-[100%] xl:left-[60%] xl:h-[22vw] z-20">
        <div className="overflow-hidden">

          <h1 className="text-black text-3xl text-center xl:text-start xl:text-6xl font-semibold">Everything You Need under the hood</h1>
        </div>

        <p className="mt-8 text-center xl:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam impedit veritatis ipsam aperiam quas ipsum soluta corporis officiis. Perferendis!</p>
      </div>
      <div className="second-text overflow-hidden absolute w-full top-[210%] left-[0%] h-[50vw] xl:w-[30vw] xl:top-[210%] xl:left-[5%] xl:h-[22vw] z-50">
        <div className="overflow-hidden">

          <h1 className="text-black text-4xl text-center xl:text-start xl:text-6xl font-semibold">Everything You Need under the hood</h1>
        </div>

        <p className="mt-8 text-center xl:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa totam impedit veritatis ipsam aperiam quas ipsum soluta corporis officiis. Perferendis!</p>
      </div>
    </section>
  )
}

export default Hero