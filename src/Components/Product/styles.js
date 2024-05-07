import  styled  from 'styled-components';

export const Container = styled.div `
display: flex;
flex-direction: column;
margin-top: 12px;

`
export const Panel = styled.div `
background-color: var(--white);
box-shadow: var(--Panel);
display: grid;
grid-template-columns: 67fr 33fr;
`
export const Column = styled.div ``
export const Galery = styled.div `
display: flex;
aling-items: center;
height:530px;
img{
    width: 387px;
    height: 500px;
}
`
export const Description = styled.div `
border-top: 1px solid var(--border);
width: 88%;
margin: 0 auto;
padding: 4px 0;
>h2{
    color: var(--text1);
    font-size:24px;
    margin-botton: 32px;
    line-height: 30px;
}
>p{
    line-height: 27px;
    font-size: 20px;
    color: var(--text3)
}
`

