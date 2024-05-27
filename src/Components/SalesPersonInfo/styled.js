import  styled, {css}  from 'styled-components';
import { HiLocationMarker, HiOutlineClock} from "react-icons/hi";
import { IoMdRibbon } from "react-icons/io";

const IconsCss = css`
widrh: 25px;
height: 25px;
`

export const Container = styled.div`
padding: 32px 16px;
margin: 0 16px;
display: flex;
flex-direction: column;
border: 1px solid var(--border);
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom: none;
`
export const Title = styled.h5`
font-size: 18px;
margin-bottom: 28px;
line-height: 22.5px;
color: var(--text1);
`
export const Card = styled.div`
display: flex;
align-items: center;
margin-botom: 20px;
>div{
margin-left: 8px;
>p{
    font-size: 16px;
    line-height: 20px;
    color: var(--text1);
}
>Strong{
    font-size: 14px;
    color: var(--text2);
    font-weight: normal;
}
>.platinum{
    color: var(--green)
}
}
`
export const LocationIcon = styled(HiLocationMarker)`
opacity: .5;
margin-top: -1.3rem;
${IconsCss}
`
export const PlatinumIcon = styled(IoMdRibbon)`
color: var(--green);
margin-top: -1.3rem;
opacity: .8;
${IconsCss}`
export const Reputation = styled.div`
margin-top: 33px;
display: flex;
flex-direction: column;
aling-items: center;
`
export const Box = styled.ol`
list-style: none;
width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 0px;
padding: 0 4px;

> li {
  width: 100%;
  height: 8px;
  

  &:nth-child(1){
    background-color: var(--reputacion1)
  }
  &:nth-child(2){
    background-color: var(--reputacion2)
  }
  &:nth-child(3){
    background-color: var(--reputacion3)
  }
  &:nth-child(4){
    background-color: var(--reputacion4)
  }
  &:nth-child(5){
    background-color: var(--reputacion5)
  }

  &.active{
    height: 12px;
  }
}
`
export const Row = styled.div``
export const SuportIcon = styled.div``
export const ClockIcon = styled(HiOutlineClock)`
opacity: .5;
margin-top: -1.3rem;
${IconsCss}
`
export const Strong = styled.div``
export const Link = styled.div``
