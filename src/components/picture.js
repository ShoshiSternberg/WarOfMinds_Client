import React from "react";
//import "./app.scss";

function Picture() {
    let name = "שושי";
    let imgSrc = "";

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const getInitials = (name) => {
        let initials;
        const nameSplit = name.split(" ");
        const nameLength = nameSplit.length;
        if (nameLength > 1) {
            initials =
                nameSplit[0].substring(0, 1) +
                nameSplit[nameLength - 1].substring(0, 1);
        } else if (nameLength === 1) {
            initials = nameSplit[0].substring(0, 1);
        } else return;

        return initials.toUpperCase();
    };

    const createImageFromInitials = (size, name, color) => {
        if (name == null) return;
        name = getInitials(name)

        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = canvas.height = size

        context.fillStyle = "#ffffff"
        context.fillRect(0, 0, size, size)
        context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        context.fillStyle = `${color}50`
        context.fillRect(0, 0, size, size)

        context.fillStyle = color;
        context.textBaseline = 'middle'
        context.textAlign = 'center'
        context.font = `${size / 2}px Roboto`
        context.fillText(name, (size / 2), (size / 2))

        return canvas.toDataURL()
    };

    return (
        <div>
            <img
                id='preview'
                src={
                    imgSrc.length <= 0
                        ? createImageFromInitials(40, name, getRandomColor())
                        : imgSrc
                }
                alt='profile-pic'
                 
            />
        </div>
    );
}

export default Picture;