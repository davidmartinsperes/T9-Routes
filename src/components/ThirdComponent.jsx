import React from 'react'

const ThirdComponent = () => {
    const tenis = [
        { nome: "Air Jordan 1", Lançamento: '1985'},
        { nome: " Air Jordan 3", Lançamento: '1988'},
        { nome: " Air Jordan 4", Lançamento: '1989'},
        { nome: "Air Jordan 11", Lançamento: '1995'},
        {nome: "Air Jordan 6", Lançamento: '1991'},
        {nome: "Air Jordan 12", Lançamento: '1996'},
        {nome: " Air Jordan 13", Lançamento: '1997'},
       
        
    ]
    tenis.sort((a,b)=> a.nome.localeCompare(b.nome));
    return (
        <div> 
            <h1>Principais Tênis</h1>
            <ul>{tenis.map((tn) => (
                <li><b>Nome: {tn.nome}  - Lançamennto: {tn.Lançamento}. </b></li>
            )
            )}
            </ul>
        </div>
    )

}

export default ThirdComponent