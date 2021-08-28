import React, {useState} from 'react';

const DetailForm = ({addCart}) => {
    const [inputs, setInputs] = useState();
    const [form, setForm] = useState({campo: '', valido: null});
    const [validarForm, setValidarForm] = useState(null)
    
    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(form.valido === true){
            setValidarForm(true)
            addCart(inputs);
            e.target.reset();
        } else {
            setValidarForm(false)
        }
    }


    // Validar formulario
    const expresiones =  {
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}

    const onChange = (e) => {
        setForm ({...form, campo: e.target.value})
    }

    const validacion = () => {
        if(expresiones.correo.test(form.campo)){
            setForm ({...form, valido: true})
        } else {
            setForm ({...form, valido: false})
        }
    }

    return (
        <form className="div-form" onSubmit={handleSubmit} id="form">

            <div className="div-datos-cliente" >
                <label>Nombre y Apellido</label>
                <input tipe="text" placeholder="Nombre y Apellido" name="nombre" onChange={handleInput} required/>
                <label>Telefono</label>
                <input tipe="text" placeholder="(11)1234567" name="telefono" onChange={handleInput} required/>
                <label>Correo Electrónico</label>
                <input tipe="email" placeholder="mail@mail.com" name="email" onChange={handleInput} required 
                onInput={onChange}  onKeyUp={validacion}/>
                
                {validarForm === false && <div className="error">
                    <p>Mail incorrecto</p>
                </div>}
                <button className="btn-compra" >Finalizar Compra</button>
            </div>
        </form>
    )
}

export default DetailForm;