import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import validation from "./validation";
import { createPokemon, getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css"



const Form = () => {


    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        name: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-56YdThnTlX2LJ4ixqaLzbfPFOPTzkE1H4Q&usqp=CAU",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const [errors, setErrors] = useState({});

    /*const disable = () => {
        let disabled = true;
        for (let error in errors) {
            //console.log("soy error", error);
            if (errors[error] === "" || errors[error].length === 0) disabled = false;
            else {
                disabled = true;
                break;
            }
        }
        return disabled;
    };*/


    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        // Validamos solo el campo actual
        const validationErrors = validation({ ...input, [fieldName]: fieldValue });
        setErrors({ ...errors, [fieldName]: validationErrors[fieldName] });

        setInput({
            ...input,
            [fieldName]: fieldValue,
        });
    };


    const handleSelect = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            types: [...input.types, e.target.value],
        });
        setErrors(
            validation({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPokemon(input));

        setInput({
            name: "",
            image: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
    };



    return (

        <div className={style.containerF}>

            <div className={style.formContainer}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h3 className={style.formTitle}>CREA UN POKEMON!</h3>
                    <div className={style.inputContainer}>

                        <input
                            type="text"
                            value={input.name}
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.name && (<span className={style.spanError} style={{ color: "#e74c3c" }}>
                                {errors.name}
                            </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="text"
                            value={input.image}
                            placeholder="Image"
                            name="image"
                            onChange={handleChange}
                        />
                        <div >
                            {errors.image && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.image}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="number"
                            value={input.hp}
                            placeholder="Hp"
                            name="hp"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.hp && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.hp}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="number"
                            value={input.attack}
                            placeholder="Attack"
                            name="attack"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.attack && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.attack}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="number"
                            value={input.defense}
                            placeholder="Defense"
                            name="defense"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.defense && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>{errors.defense}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="number"
                            value={input.speed}
                            placeholder="Speed"
                            name="speed"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.speed && (<span className={style.spanError}
                                style={{ color: "#e74c3c" }}>
                                {errors.speed}
                            </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="number"
                            value={input.height}
                            placeholder="Height"
                            name="height"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.height && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.height}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <input
                            type="number"
                            value={input.weight}
                            placeholder="Weight"
                            name="weight"
                            onChange={handleChange}
                        />
                        <div>
                            {errors.weight && (<span className={style.spanError}
                                style={{ color: "#e74c3c" }}>
                                {errors.weight}
                            </span>
                            )}
                        </div>
                    </div>

                    <div className={style.inputContainer}>
                        <label className={style.typeS}>Type: </label>
                        <select
                            onChange={(e) => handleSelect(e)}
                            className={style.selectType}>
                            {types.map((t, index) => (
                                <option key={index} value={t.name}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                        <div>
                            {errors.types && typeof errors.types === 'string' &&
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.types}
                                </span>}
                        </div>
                    </div>

                    <div className={style.crearP}>
                        <button
                            type="submit"
                            name="submit"
                            className={style.buttonCrear}
                        //disabled={disable()}
                        >
                            <p className={style.go}>CREAR!</p>
                        </button>
                    </div>

                </form>
            </div>
            <Link to='/home'><button className={style.buttonVolver}>Volver</button></Link>
        </div>
    )
}

export default Form;

