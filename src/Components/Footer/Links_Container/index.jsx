import './style.css'

const Links_Container = ({Links}) => {

    return <div className="Links_Container">
        <span>{Links.title}</span>
        <ul>
            <li><a href="/">{Links.link_1}</a></li>
            <li><a href="/">{Links.link_2}</a></li>
            <li><a href="/">{Links.link_3}</a></li>
            <li><a href="/">{Links.link_4}</a></li>
        </ul>
    </div>

};

export default Links_Container;