var mongoose = require("mongoose");

var asesoriaSchema = new mongoose.Schema({
    asesoria : String,
    referencia : String,
    descripcion : String,
    derechos : Array,
    estado : Object,
    valor : Number
});
    
mongoose.model('asesoria', asesoriaSchema);
