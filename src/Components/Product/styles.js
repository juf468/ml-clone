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

export const Section = styled.div `
padding: 32px 16px;
margin 0 16px;
border: 1px solid var(--border);
border-bottom: none;
>h2{
    font-size: 18px;
    margin-bottom: 28px;
    color: var(--text3);
    line-height: 22.5px;
}
>div{
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

>span + span{
    margin-top: 24px;
}
.title{
    font-size: 16px;
    color: var(--text1);
    line-height: 21.6px;
    margon-bottom: 12px;
}
.description{
    font-size: 14px;
    color: var(--text2);

}
>a{
    font-size: 14px;
    color: var(--blue3);
    text-decoration: none;
}
}
`