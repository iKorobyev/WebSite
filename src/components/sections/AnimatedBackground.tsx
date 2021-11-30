import React, { FC, memo, useEffect, useRef } from 'react'

interface AnimatedBackgroundProps {

}

const images: string[] = [
  '/images/home/bg-img01.png',
  '/images/home/bg-img02.png',
  '/images/home/bg-img03.png'
]

const AnimatedBackground: FC<AnimatedBackgroundProps> = ({ children }) => {
  const refChaoticAnimation = useRef<HTMLDivElement>(null)

  const chaoticMovement = () => {
    const scene = refChaoticAnimation.current
    const time = 8000
    const timeTransitionMin = time * 2
    const timeTransitionMax = time * 4
    const timeIntervalMin = time
    const timeIntervalMax = time * 2
    const size = 1.5
    for (let i = 0; i < 40; i++) {
      GWcreatePart(scene)
    }

    function GWcreatePart(scene: any) {
      let part = document.createElement('div')
      part.className = 'gw-part'
      part.style.width = getRandomInt(100, 250)/16 + 'rem'
      part.style.height = getRandomInt(150, 300)/16 + 'rem'
      let img = document.createElement('img')
      img.className = 'img'
      img.src = images[getRandomInt(0, 3)]
      part.appendChild(img)
      scene.appendChild(part)

      setInterval(() => {
        const tempTime = getRandomInt(timeTransitionMin, timeTransitionMax)
        part.style.transition = tempTime + 'ms all'
        part.style.transform = 'translateX(' + getRandomInt(-scene.getBoundingClientRect().width / size, scene.getBoundingClientRect().width / size) + 'px) ' +
          'translateY(' + getRandomInt(-scene.getBoundingClientRect().height / size, scene.getBoundingClientRect().height / size) + 'px)'
      }, getRandomInt(timeIntervalMin, timeIntervalMax))
    }

    function getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min)) + min
    }

    setInterval(() => {
      if (refChaoticAnimation.current) refChaoticAnimation.current.style.opacity = '1'
    }, 4500)
  }

  useEffect(chaoticMovement, [])

  return (
    <div className='min-w-screen min-h-screen relative overflow-hidden'>
      <div style={{opacity: 0}} ref={refChaoticAnimation} className='min-w-screen min-h-screen z-0 absolute overflow-hidden transition duration-[2s]' />
      {children}
    </div>
  )
}

export default memo(AnimatedBackground)