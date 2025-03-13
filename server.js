const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Dados estáticos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh_bZlRIATH5np_lov3czH_SAsPyFdfD9Ng&s" },
    { id: 2, nome: "Smartphone", preco: 2000, imagem: "https://io.convertiez.com.br/m/lojasedmil/shop/products/images/1816/medium/smartphone-samsung-a06-4g-128gb-4gb-ram-4gb-ram-plus-camera-traseira-dupla-branco_15014.jpg"},
    { id: 3, nome: "Mouse", preco: 150, imagem: "https://images.tcdn.com.br/img/img_prod/406359/mouse_pro_gamer_15000_dpi_tempo_de_resposta_1ms_7_botoes_programaveis_software_avancado_trust_gxt_90_3639_1_20220707113439.jpg"},
    { id: 4, nome: "Teclado", preco: 200, imagem: "https://cdn.sistemawbuy.com.br/arquivos/f8d1f4a04e988aeb5f9660e041392be7/produtos/65f1a2d0e31cf/101db-teclado-gamer-profissional-com-fio-targa-k120-rgb-01-65f1a2d127c11.jpg"}
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
