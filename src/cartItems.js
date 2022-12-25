import React from 'react';
class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-items">
                <div className="left-block">
               <img style={style.image} src='mobile.jpg'/>
                </div>
                <div className="right-block">
                <div style={{fontSize:30}}> Mobile</div>
                <div style={style.div}> Rs : 999</div>
                <div style={style.div}> Qnty : 1</div>
                    <div className="cart-item-action">
                        <button style={style.button}> + </button>
                        <button  style={style.button}> - </button>
                        <button  style={style.button}>Del </button>

                        { /* Buttons*/}
                    </div>
                </div>
            </div>
        );
    }
}
const style={
    image:{
        height:150,
        width:150,
        borderRadius:4,
        background:'grey',
    },
    div:{
        fontSize:20,
        color:'grey',
        marginTop:10
    },
    button:{
        height:30,
        width:30,
        borderRadius: 9,
        background: 'grey',
        marginTop:10,
        marginLeft:2
    }
}
export default  CartItem;