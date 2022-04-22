import Lottie from 'react-lottie'

interface LottieProps {
  animationData: any
}

const NextLottie = ({ animationData }: LottieProps): JSX.Element => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  }
  return <Lottie options={options} />
}

export default NextLottie
