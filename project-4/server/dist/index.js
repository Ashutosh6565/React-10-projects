"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
        name: "Boilded Egg",
        price: 10,
        text: "A healthy and protein-rich choice, perfect to start your day.",
        image: "/images/egg.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "A warm and savory Japanese noodle soup, full of rich flavors.",
        image: "/images/ramen.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Juicy and perfectly grilled chicken packed with smoky goodness.",
        image: "/images/chicken.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "A sweet and fluffy delight to satisfy your dessert cravings.",
        image: "/images/cake.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "A classic and filling meal with a juicy patty and fresh toppings.",
        image: "/images/burger.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Soft and fluffy pancakes served with syrup for a sweet treat.",
        image: "/images/pancake.png",
        type: "dinner",
    }
          

  
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map