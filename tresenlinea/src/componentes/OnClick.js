import HandleClick from "./HandleClick ";

export default function OnClick ({value, classtext}) {
    return (
    <button
        className={classtext}
        onClick={HandleClick}
    >
        {value}
    </button>)
}

