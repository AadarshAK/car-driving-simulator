AFRAME.registerComponent("controller", {
    schema : {
        speed_of_car : {type : "number", default : 0},
    },

    init : function() {
        window.addEventListener("keydown", e =>{
            if (e.key === "ArrowUp"){
                this.data.speed_of_car = this.el.getAttribute("position")
                this.el.setAttribute("position")
            }

            if (e.key === "ArrowDown"){
                this.data.speed_of_car = this.el.getAttribute("position")
                let pos = this.data.speed_of_car
                pos.z -= 2
                this.el.setAttribute("position" , pos)
                console.log("position is changing")
            }
        })
    }
})