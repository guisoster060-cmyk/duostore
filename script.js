/* =========================================================================
   DUO STORE — CADASTRO E ORGANIZAÇÃO DOS PRODUTOS
   =========================================================================
   COMO ALTERAR UM PRODUTO:
   - Cada marca possui um bloco próprio dentro de PRODUCTS.
   - Para trocar foto, altere apenas o número em foto("Marca", N).
   - Para trocar nome, preço, gênero ou tamanhos, altere os campos do item.
   - As fotos ficam separadas por marca em /images/NOME-DA-PASTA/.
   - Foram criados 20 exemplos por marca para facilitar a visualização.
   - Os nomes, preços e tamanhos abaixo são FICTÍCIOS e servem somente
     como modelo até você cadastrar os produtos reais.
   ========================================================================= */

/* ---------- CONFIGURAÇÃO DA LOJA ---------- */
const WHATSAPP_NUMBER = "5500000000000"; // TROQUE pelo WhatsApp real da loja.

/* ---------- PASTAS DAS MARCAS ----------
   Se uma marca tiver novas fotos, coloque-as na pasta correspondente:
   /images/anselmi/1.jpg ... /images/anselmi/20.jpg
*/
const BRAND_FOLDERS = {
  "Anselmi": "anselmi",
  "Biamar": "biamar",
  "Naguchi": "naguchi",
  "DoceTrama": "docetrama",
  "Alpelo": "alpelo",
  "Paco Jeans": "paco-jeans",
  "Ogochi": "ogochi",
  "Beagle": "beagle",
  "aBenção": "abencao",
};

/* Função central das imagens.
   Ex.: foto("Anselmi", 3) -> ../images/anselmi/3.jpg
   Assim, se você trocar a organização das pastas, basta alterar
   BRAND_FOLDERS acima. */
function foto(brand, numero){
  const pasta = BRAND_FOLDERS[brand];
  if (!pasta) return null;
  return `images/${pasta}/${numero}.jpg`;
}

/* =========================================================================
   PRODUTOS — ORGANIZADOS POR MARCA
   -------------------------------------------------------------------------
   Cada marca tem EXATAMENTE 20 exemplos.
   Para facilitar futuras alterações, os produtos da mesma marca ficam
   sempre juntos. O ID é único e não deve ser repetido.
   ========================================================================= */
const PRODUCTS = [
  // ==================== ANSELMI — 20 EXEMPLOS ====================
  { id:1, brand:"Anselmi", name:"Blazer Oliva essencial 01", price:79.90, img:foto("Anselmi",1), gender:"Feminino", sizes:["PP", "M"], sample:true },
  { id:2, brand:"Anselmi", name:"Cardigan Areia casual 02", price:93.37, img:foto("Anselmi",2), gender:"Masculino", sizes:["P", "G", "36"], sample:true },
  { id:3, brand:"Anselmi", name:"Suéter Preto canelado 03", price:106.84, img:foto("Anselmi",3), gender:"Unissex", sizes:["M"], sample:true },
  { id:4, brand:"Anselmi", name:"Casaco Off-white leve 04", price:120.31, img:foto("Anselmi",4), gender:"Feminino", sizes:["G", "36"], sample:true },
  { id:5, brand:"Anselmi", name:"Colete Terracota clássico 05", price:133.78, img:foto("Anselmi",5), gender:"Masculino", sizes:["GG", "38", "42"], sample:true },
  { id:6, brand:"Anselmi", name:"Tricô Marinho básico 06", price:147.25, img:foto("Anselmi",6), gender:"Unissex", sizes:["36"], sample:true },
  { id:7, brand:"Anselmi", name:"Jaqueta Verde premium 07", price:160.72, img:foto("Anselmi",7), gender:"Feminino", sizes:["38", "42"], sample:true },
  { id:8, brand:"Anselmi", name:"Malha Caramelo despojado 08", price:174.19, img:foto("Anselmi",8), gender:"Masculino", sizes:["40", "44", "48"], sample:true },
  { id:9, brand:"Anselmi", name:"Moletom Cinza moderno 09", price:187.66, img:foto("Anselmi",9), gender:"Unissex", sizes:["42"], sample:true },
  { id:10, brand:"Anselmi", name:"Capa Rosa liso 10", price:201.13, img:foto("Anselmi",10), gender:"Feminino", sizes:["44", "48"], sample:true },
  { id:11, brand:"Anselmi", name:"Cachecol Vinho essencial 11", price:214.60, img:foto("Anselmi",11), gender:"Masculino", sizes:["46", "Único", "P"], sample:true },
  { id:12, brand:"Anselmi", name:"Pulôver Azul casual 12", price:228.07, img:foto("Anselmi",12), gender:"Unissex", sizes:["48"], sample:true },
  { id:13, brand:"Anselmi", name:"Cropped Mostarda canelado 13", price:241.54, img:foto("Anselmi",13), gender:"Feminino", sizes:["Único", "P"], sample:true },
  { id:14, brand:"Anselmi", name:"Kimono Bege leve 14", price:255.01, img:foto("Anselmi",14), gender:"Masculino", sizes:["PP", "M", "GG"], sample:true },
  { id:15, brand:"Anselmi", name:"Parka Bordô clássico 15", price:268.48, img:foto("Anselmi",15), gender:"Unissex", sizes:["P"], sample:true },
  { id:16, brand:"Anselmi", name:"Regata Grafite básico 16", price:281.95, img:foto("Anselmi",16), gender:"Feminino", sizes:["M", "GG"], sample:true },
  { id:17, brand:"Anselmi", name:"Blusa Creme premium 17", price:295.42, img:foto("Anselmi",17), gender:"Masculino", sizes:["G", "36", "40"], sample:true },
  { id:18, brand:"Anselmi", name:"Camisa Jeans despojado 18", price:308.89, img:foto("Anselmi",18), gender:"Unissex", sizes:["GG"], sample:true },
  { id:19, brand:"Anselmi", name:"Vestido Lavanda moderno 19", price:322.36, img:foto("Anselmi",19), gender:"Feminino", sizes:["36", "40"], sample:true },
  { id:20, brand:"Anselmi", name:"Conjunto Telha liso 20", price:335.83, img:foto("Anselmi",20), gender:"Masculino", sizes:["38", "42", "46"], sample:true },

  // ==================== BIAMAR — 20 EXEMPLOS ====================
  { id:21, brand:"Biamar", name:"Blusa Off-white texturizado 01", price:91.27, img:foto("Biamar",1), gender:"Masculino", sizes:["P", "G"], sample:true },
  { id:22, brand:"Biamar", name:"Calça Terracota conforto 02", price:104.74, img:foto("Biamar",2), gender:"Unissex", sizes:["M", "GG", "38"], sample:true },
  { id:23, brand:"Biamar", name:"Vestido Marinho minimalista 03", price:118.21, img:foto("Biamar",3), gender:"Feminino", sizes:["G"], sample:true },
  { id:24, brand:"Biamar", name:"Saia Verde urbano 04", price:131.68, img:foto("Biamar",4), gender:"Masculino", sizes:["GG", "38"], sample:true },
  { id:25, brand:"Biamar", name:"Cardigan Caramelo alongado 05", price:145.15, img:foto("Biamar",5), gender:"Unissex", sizes:["36", "40", "44"], sample:true },
  { id:26, brand:"Biamar", name:"Tricô Cinza contemporâneo 06", price:158.62, img:foto("Biamar",6), gender:"Feminino", sizes:["38"], sample:true },
  { id:27, brand:"Biamar", name:"Cropped Rosa versátil 07", price:172.09, img:foto("Biamar",7), gender:"Masculino", sizes:["40", "44"], sample:true },
  { id:28, brand:"Biamar", name:"Casaco Vinho soft 08", price:185.56, img:foto("Biamar",8), gender:"Unissex", sizes:["42", "46", "Único"], sample:true },
  { id:29, brand:"Biamar", name:"Colete Azul atemporal 09", price:199.03, img:foto("Biamar",9), gender:"Feminino", sizes:["44"], sample:true },
  { id:30, brand:"Biamar", name:"Suéter Mostarda estampado 10", price:212.50, img:foto("Biamar",10), gender:"Masculino", sizes:["46", "Único"], sample:true },
  { id:31, brand:"Biamar", name:"Regata Bege texturizado 11", price:225.97, img:foto("Biamar",11), gender:"Unissex", sizes:["48", "PP", "M"], sample:true },
  { id:32, brand:"Biamar", name:"Camisa Bordô conforto 12", price:239.44, img:foto("Biamar",12), gender:"Feminino", sizes:["Único"], sample:true },
  { id:33, brand:"Biamar", name:"Poncho Grafite minimalista 13", price:252.91, img:foto("Biamar",13), gender:"Masculino", sizes:["PP", "M"], sample:true },
  { id:34, brand:"Biamar", name:"Parka Creme urbano 14", price:266.38, img:foto("Biamar",14), gender:"Unissex", sizes:["P", "G", "36"], sample:true },
  { id:35, brand:"Biamar", name:"Jaqueta Jeans alongado 15", price:279.85, img:foto("Biamar",15), gender:"Feminino", sizes:["M"], sample:true },
  { id:36, brand:"Biamar", name:"Conjunto Lavanda contemporâneo 16", price:293.32, img:foto("Biamar",16), gender:"Masculino", sizes:["G", "36"], sample:true },
  { id:37, brand:"Biamar", name:"Top Telha versátil 17", price:306.79, img:foto("Biamar",17), gender:"Unissex", sizes:["GG", "38", "42"], sample:true },
  { id:38, brand:"Biamar", name:"Moletom Oliva soft 18", price:320.26, img:foto("Biamar",18), gender:"Feminino", sizes:["36"], sample:true },
  { id:39, brand:"Biamar", name:"Macacão Areia atemporal 19", price:333.73, img:foto("Biamar",19), gender:"Masculino", sizes:["38", "42"], sample:true },
  { id:40, brand:"Biamar", name:"Kimono Preto estampado 20", price:347.20, img:foto("Biamar",20), gender:"Unissex", sizes:["40", "44", "48"], sample:true },

  // ==================== NAGUCHI — 20 EXEMPLOS ====================
  { id:41, brand:"Naguchi", name:"Poncho Verde casual 01", price:102.64, img:foto("Naguchi",1), gender:"Unissex", sizes:["M", "GG"], sample:true },
  { id:42, brand:"Naguchi", name:"Blusa Caramelo canelado 02", price:116.11, img:foto("Naguchi",2), gender:"Feminino", sizes:["G", "36", "40"], sample:true },
  { id:43, brand:"Naguchi", name:"Calça Cinza leve 03", price:129.58, img:foto("Naguchi",3), gender:"Masculino", sizes:["GG"], sample:true },
  { id:44, brand:"Naguchi", name:"Vestido Rosa clássico 04", price:143.05, img:foto("Naguchi",4), gender:"Unissex", sizes:["36", "40"], sample:true },
  { id:45, brand:"Naguchi", name:"Saia Vinho básico 05", price:156.52, img:foto("Naguchi",5), gender:"Feminino", sizes:["38", "42", "46"], sample:true },
  { id:46, brand:"Naguchi", name:"Cardigan Azul premium 06", price:169.99, img:foto("Naguchi",6), gender:"Masculino", sizes:["40"], sample:true },
  { id:47, brand:"Naguchi", name:"Jaqueta Mostarda despojado 07", price:183.46, img:foto("Naguchi",7), gender:"Unissex", sizes:["42", "46"], sample:true },
  { id:48, brand:"Naguchi", name:"Cropped Bege moderno 08", price:196.93, img:foto("Naguchi",8), gender:"Feminino", sizes:["44", "48", "PP"], sample:true },
  { id:49, brand:"Naguchi", name:"Casaco Bordô liso 09", price:210.40, img:foto("Naguchi",9), gender:"Masculino", sizes:["46"], sample:true },
  { id:50, brand:"Naguchi", name:"Colete Grafite essencial 10", price:223.87, img:foto("Naguchi",10), gender:"Unissex", sizes:["48", "PP"], sample:true },
  { id:51, brand:"Naguchi", name:"Camisa Creme casual 11", price:237.34, img:foto("Naguchi",11), gender:"Feminino", sizes:["Único", "P", "G"], sample:true },
  { id:52, brand:"Naguchi", name:"Suéter Jeans canelado 12", price:250.81, img:foto("Naguchi",12), gender:"Masculino", sizes:["PP"], sample:true },
  { id:53, brand:"Naguchi", name:"Regata Lavanda leve 13", price:264.28, img:foto("Naguchi",13), gender:"Unissex", sizes:["P", "G"], sample:true },
  { id:54, brand:"Naguchi", name:"Parka Telha clássico 14", price:277.75, img:foto("Naguchi",14), gender:"Feminino", sizes:["M", "GG", "38"], sample:true },
  { id:55, brand:"Naguchi", name:"Tricô Oliva básico 15", price:291.22, img:foto("Naguchi",15), gender:"Masculino", sizes:["G"], sample:true },
  { id:56, brand:"Naguchi", name:"Conjunto Areia premium 16", price:304.69, img:foto("Naguchi",16), gender:"Unissex", sizes:["GG", "38"], sample:true },
  { id:57, brand:"Naguchi", name:"Kimono Preto despojado 17", price:318.16, img:foto("Naguchi",17), gender:"Feminino", sizes:["36", "40", "44"], sample:true },
  { id:58, brand:"Naguchi", name:"Moletom Off-white moderno 18", price:331.63, img:foto("Naguchi",18), gender:"Masculino", sizes:["38"], sample:true },
  { id:59, brand:"Naguchi", name:"Macacão Terracota liso 19", price:345.10, img:foto("Naguchi",19), gender:"Unissex", sizes:["40", "44"], sample:true },
  { id:60, brand:"Naguchi", name:"Capa Marinho essencial 20", price:358.57, img:foto("Naguchi",20), gender:"Feminino", sizes:["42", "46", "Único"], sample:true },

  // ==================== DOCETRAMA — 20 EXEMPLOS ====================
  { id:61, brand:"DoceTrama", name:"Camiseta Rosa conforto 01", price:114.01, img:foto("DoceTrama",1), gender:"Feminino", sizes:["G", "36"], sample:true },
  { id:62, brand:"DoceTrama", name:"Moletom Vinho minimalista 02", price:127.48, img:foto("DoceTrama",2), gender:"Masculino", sizes:["GG", "38", "42"], sample:true },
  { id:63, brand:"DoceTrama", name:"Blusa Azul urbano 03", price:140.95, img:foto("DoceTrama",3), gender:"Unissex", sizes:["36"], sample:true },
  { id:64, brand:"DoceTrama", name:"Camisa Mostarda alongado 04", price:154.42, img:foto("DoceTrama",4), gender:"Feminino", sizes:["38", "42"], sample:true },
  { id:65, brand:"DoceTrama", name:"Regata Bege contemporâneo 05", price:167.89, img:foto("DoceTrama",5), gender:"Masculino", sizes:["40", "44", "48"], sample:true },
  { id:66, brand:"DoceTrama", name:"Cropped Bordô versátil 06", price:181.36, img:foto("DoceTrama",6), gender:"Unissex", sizes:["42"], sample:true },
  { id:67, brand:"DoceTrama", name:"Vestido Grafite soft 07", price:194.83, img:foto("DoceTrama",7), gender:"Feminino", sizes:["44", "48"], sample:true },
  { id:68, brand:"DoceTrama", name:"Conjunto Creme atemporal 08", price:208.30, img:foto("DoceTrama",8), gender:"Masculino", sizes:["46", "Único", "P"], sample:true },
  { id:69, brand:"DoceTrama", name:"Calça Jeans estampado 09", price:221.77, img:foto("DoceTrama",9), gender:"Unissex", sizes:["48"], sample:true },
  { id:70, brand:"DoceTrama", name:"Shorts Lavanda texturizado 10", price:235.24, img:foto("DoceTrama",10), gender:"Feminino", sizes:["Único", "P"], sample:true },
  { id:71, brand:"DoceTrama", name:"Jaqueta Telha conforto 11", price:248.71, img:foto("DoceTrama",11), gender:"Masculino", sizes:["PP", "M", "GG"], sample:true },
  { id:72, brand:"DoceTrama", name:"Cardigan Oliva minimalista 12", price:262.18, img:foto("DoceTrama",12), gender:"Unissex", sizes:["P"], sample:true },
  { id:73, brand:"DoceTrama", name:"Suéter Areia urbano 13", price:275.65, img:foto("DoceTrama",13), gender:"Feminino", sizes:["M", "GG"], sample:true },
  { id:74, brand:"DoceTrama", name:"Colete Preto alongado 14", price:289.12, img:foto("DoceTrama",14), gender:"Masculino", sizes:["G", "36", "40"], sample:true },
  { id:75, brand:"DoceTrama", name:"Parka Off-white contemporâneo 15", price:302.59, img:foto("DoceTrama",15), gender:"Unissex", sizes:["GG"], sample:true },
  { id:76, brand:"DoceTrama", name:"Kimono Terracota versátil 16", price:316.06, img:foto("DoceTrama",16), gender:"Feminino", sizes:["36", "40"], sample:true },
  { id:77, brand:"DoceTrama", name:"Top Marinho soft 17", price:329.53, img:foto("DoceTrama",17), gender:"Masculino", sizes:["38", "42", "46"], sample:true },
  { id:78, brand:"DoceTrama", name:"Saia Verde atemporal 18", price:343.00, img:foto("DoceTrama",18), gender:"Unissex", sizes:["40"], sample:true },
  { id:79, brand:"DoceTrama", name:"Macacão Caramelo estampado 19", price:356.47, img:foto("DoceTrama",19), gender:"Feminino", sizes:["42", "46"], sample:true },
  { id:80, brand:"DoceTrama", name:"Capa Cinza texturizado 20", price:369.94, img:foto("DoceTrama",20), gender:"Masculino", sizes:["44", "48", "PP"], sample:true },

  // ==================== ALPELO — 20 EXEMPLOS ====================
  { id:81, brand:"Alpelo", name:"Camisa Mostarda canelado 01", price:125.38, img:null, gender:"Masculino", sizes:["GG", "38"], sample:true },
  { id:82, brand:"Alpelo", name:"Polo Bege leve 02", price:138.85, img:null, gender:"Unissex", sizes:["36", "40", "44"], sample:true },
  { id:83, brand:"Alpelo", name:"Camiseta Bordô clássico 03", price:152.32, img:null, gender:"Feminino", sizes:["38"], sample:true },
  { id:84, brand:"Alpelo", name:"Bermuda Grafite básico 04", price:165.79, img:null, gender:"Masculino", sizes:["40", "44"], sample:true },
  { id:85, brand:"Alpelo", name:"Calça Creme premium 05", price:179.26, img:null, gender:"Unissex", sizes:["42", "46", "Único"], sample:true },
  { id:86, brand:"Alpelo", name:"Jaqueta Jeans despojado 06", price:192.73, img:null, gender:"Feminino", sizes:["44"], sample:true },
  { id:87, brand:"Alpelo", name:"Blazer Lavanda moderno 07", price:206.20, img:null, gender:"Masculino", sizes:["46", "Único"], sample:true },
  { id:88, brand:"Alpelo", name:"Colete Telha liso 08", price:219.67, img:null, gender:"Unissex", sizes:["48", "PP", "M"], sample:true },
  { id:89, brand:"Alpelo", name:"Suéter Oliva essencial 09", price:233.14, img:null, gender:"Feminino", sizes:["Único"], sample:true },
  { id:90, brand:"Alpelo", name:"Moletom Areia casual 10", price:246.61, img:null, gender:"Masculino", sizes:["PP", "M"], sample:true },
  { id:91, brand:"Alpelo", name:"Casaco Preto canelado 11", price:260.08, img:null, gender:"Unissex", sizes:["P", "G", "36"], sample:true },
  { id:92, brand:"Alpelo", name:"Regata Off-white leve 12", price:273.55, img:null, gender:"Feminino", sizes:["M"], sample:true },
  { id:93, brand:"Alpelo", name:"Shorts Terracota clássico 13", price:287.02, img:null, gender:"Masculino", sizes:["G", "36"], sample:true },
  { id:94, brand:"Alpelo", name:"Parka Marinho básico 14", price:300.49, img:null, gender:"Unissex", sizes:["GG", "38", "42"], sample:true },
  { id:95, brand:"Alpelo", name:"Cardigan Verde premium 15", price:313.96, img:null, gender:"Feminino", sizes:["36"], sample:true },
  { id:96, brand:"Alpelo", name:"Tricô Caramelo despojado 16", price:327.43, img:null, gender:"Masculino", sizes:["38", "42"], sample:true },
  { id:97, brand:"Alpelo", name:"Conjunto Cinza moderno 17", price:340.90, img:null, gender:"Unissex", sizes:["40", "44", "48"], sample:true },
  { id:98, brand:"Alpelo", name:"Camiseta Rosa liso 18", price:354.37, img:null, gender:"Feminino", sizes:["42"], sample:true },
  { id:99, brand:"Alpelo", name:"Camisa Vinho essencial 19", price:367.84, img:null, gender:"Masculino", sizes:["44", "48"], sample:true },
  { id:100, brand:"Alpelo", name:"Jaqueta Azul casual 20", price:381.31, img:null, gender:"Unissex", sizes:["46", "Único", "P"], sample:true },

  // ==================== PACO JEANS — 20 EXEMPLOS ====================
  { id:101, brand:"Paco Jeans", name:"Jeans Grafite minimalista 01", price:136.75, img:null, gender:"Unissex", sizes:["36", "40"], sample:true },
  { id:102, brand:"Paco Jeans", name:"Calça Creme urbano 02", price:150.22, img:null, gender:"Feminino", sizes:["38", "42", "46"], sample:true },
  { id:103, brand:"Paco Jeans", name:"Jaqueta Jeans alongado 03", price:163.69, img:null, gender:"Masculino", sizes:["40"], sample:true },
  { id:104, brand:"Paco Jeans", name:"Camiseta Lavanda contemporâneo 04", price:177.16, img:null, gender:"Unissex", sizes:["42", "46"], sample:true },
  { id:105, brand:"Paco Jeans", name:"Camisa Telha versátil 05", price:190.63, img:null, gender:"Feminino", sizes:["44", "48", "PP"], sample:true },
  { id:106, brand:"Paco Jeans", name:"Bermuda Oliva soft 06", price:204.10, img:null, gender:"Masculino", sizes:["46"], sample:true },
  { id:107, brand:"Paco Jeans", name:"Shorts Areia atemporal 07", price:217.57, img:null, gender:"Unissex", sizes:["48", "PP"], sample:true },
  { id:108, brand:"Paco Jeans", name:"Colete Preto estampado 08", price:231.04, img:null, gender:"Feminino", sizes:["Único", "P", "G"], sample:true },
  { id:109, brand:"Paco Jeans", name:"Macacão Off-white texturizado 09", price:244.51, img:null, gender:"Masculino", sizes:["PP"], sample:true },
  { id:110, brand:"Paco Jeans", name:"Saia Terracota conforto 10", price:257.98, img:null, gender:"Unissex", sizes:["P", "G"], sample:true },
  { id:111, brand:"Paco Jeans", name:"Vestido Marinho minimalista 11", price:271.45, img:null, gender:"Feminino", sizes:["M", "GG", "38"], sample:true },
  { id:112, brand:"Paco Jeans", name:"Blusa Verde urbano 12", price:284.92, img:null, gender:"Masculino", sizes:["G"], sample:true },
  { id:113, brand:"Paco Jeans", name:"Cropped Caramelo alongado 13", price:298.39, img:null, gender:"Unissex", sizes:["GG", "38"], sample:true },
  { id:114, brand:"Paco Jeans", name:"Parka Cinza contemporâneo 14", price:311.86, img:null, gender:"Feminino", sizes:["36", "40", "44"], sample:true },
  { id:115, brand:"Paco Jeans", name:"Moletom Rosa versátil 15", price:325.33, img:null, gender:"Masculino", sizes:["38"], sample:true },
  { id:116, brand:"Paco Jeans", name:"Conjunto Vinho soft 16", price:338.80, img:null, gender:"Unissex", sizes:["40", "44"], sample:true },
  { id:117, brand:"Paco Jeans", name:"Regata Azul atemporal 17", price:352.27, img:null, gender:"Feminino", sizes:["42", "46", "Único"], sample:true },
  { id:118, brand:"Paco Jeans", name:"Cardigan Mostarda estampado 18", price:365.74, img:null, gender:"Masculino", sizes:["44"], sample:true },
  { id:119, brand:"Paco Jeans", name:"Calça Bege texturizado 19", price:379.21, img:null, gender:"Unissex", sizes:["46", "Único"], sample:true },
  { id:120, brand:"Paco Jeans", name:"Jaqueta Bordô conforto 20", price:392.68, img:null, gender:"Feminino", sizes:["48", "PP", "M"], sample:true },

  // ==================== OGOCHI — 20 EXEMPLOS ====================
  { id:121, brand:"Ogochi", name:"Camisa Lavanda leve 01", price:148.12, img:null, gender:"Feminino", sizes:["38", "42"], sample:true },
  { id:122, brand:"Ogochi", name:"Polo Telha clássico 02", price:161.59, img:null, gender:"Masculino", sizes:["40", "44", "48"], sample:true },
  { id:123, brand:"Ogochi", name:"Camiseta Oliva básico 03", price:175.06, img:null, gender:"Unissex", sizes:["42"], sample:true },
  { id:124, brand:"Ogochi", name:"Bermuda Areia premium 04", price:188.53, img:null, gender:"Feminino", sizes:["44", "48"], sample:true },
  { id:125, brand:"Ogochi", name:"Calça Preto despojado 05", price:202.00, img:null, gender:"Masculino", sizes:["46", "Único", "P"], sample:true },
  { id:126, brand:"Ogochi", name:"Jaqueta Off-white moderno 06", price:215.47, img:null, gender:"Unissex", sizes:["48"], sample:true },
  { id:127, brand:"Ogochi", name:"Blazer Terracota liso 07", price:228.94, img:null, gender:"Feminino", sizes:["Único", "P"], sample:true },
  { id:128, brand:"Ogochi", name:"Colete Marinho essencial 08", price:242.41, img:null, gender:"Masculino", sizes:["PP", "M", "GG"], sample:true },
  { id:129, brand:"Ogochi", name:"Suéter Verde casual 09", price:255.88, img:null, gender:"Unissex", sizes:["P"], sample:true },
  { id:130, brand:"Ogochi", name:"Moletom Caramelo canelado 10", price:269.35, img:null, gender:"Feminino", sizes:["M", "GG"], sample:true },
  { id:131, brand:"Ogochi", name:"Casaco Cinza leve 11", price:282.82, img:null, gender:"Masculino", sizes:["G", "36", "40"], sample:true },
  { id:132, brand:"Ogochi", name:"Regata Rosa clássico 12", price:296.29, img:null, gender:"Unissex", sizes:["GG"], sample:true },
  { id:133, brand:"Ogochi", name:"Shorts Vinho básico 13", price:309.76, img:null, gender:"Feminino", sizes:["36", "40"], sample:true },
  { id:134, brand:"Ogochi", name:"Parka Azul premium 14", price:323.23, img:null, gender:"Masculino", sizes:["38", "42", "46"], sample:true },
  { id:135, brand:"Ogochi", name:"Cardigan Mostarda despojado 15", price:336.70, img:null, gender:"Unissex", sizes:["40"], sample:true },
  { id:136, brand:"Ogochi", name:"Tricô Bege moderno 16", price:350.17, img:null, gender:"Feminino", sizes:["42", "46"], sample:true },
  { id:137, brand:"Ogochi", name:"Conjunto Bordô liso 17", price:363.64, img:null, gender:"Masculino", sizes:["44", "48", "PP"], sample:true },
  { id:138, brand:"Ogochi", name:"Camiseta Grafite essencial 18", price:377.11, img:null, gender:"Unissex", sizes:["46"], sample:true },
  { id:139, brand:"Ogochi", name:"Camisa Creme casual 19", price:390.58, img:null, gender:"Feminino", sizes:["48", "PP"], sample:true },
  { id:140, brand:"Ogochi", name:"Jaqueta Jeans canelado 20", price:404.05, img:null, gender:"Masculino", sizes:["Único", "P", "G"], sample:true },

  // ==================== BEAGLE — 20 EXEMPLOS ====================
  { id:141, brand:"Beagle", name:"Camiseta Areia urbano 01", price:159.49, img:null, gender:"Masculino", sizes:["40", "44"], sample:true },
  { id:142, brand:"Beagle", name:"Camisa Preto alongado 02", price:172.96, img:null, gender:"Unissex", sizes:["42", "46", "Único"], sample:true },
  { id:143, brand:"Beagle", name:"Polo Off-white contemporâneo 03", price:186.43, img:null, gender:"Feminino", sizes:["44"], sample:true },
  { id:144, brand:"Beagle", name:"Bermuda Terracota versátil 04", price:199.90, img:null, gender:"Masculino", sizes:["46", "Único"], sample:true },
  { id:145, brand:"Beagle", name:"Calça Marinho soft 05", price:213.37, img:null, gender:"Unissex", sizes:["48", "PP", "M"], sample:true },
  { id:146, brand:"Beagle", name:"Jaqueta Verde atemporal 06", price:226.84, img:null, gender:"Feminino", sizes:["Único"], sample:true },
  { id:147, brand:"Beagle", name:"Moletom Caramelo estampado 07", price:240.31, img:null, gender:"Masculino", sizes:["PP", "M"], sample:true },
  { id:148, brand:"Beagle", name:"Suéter Cinza texturizado 08", price:253.78, img:null, gender:"Unissex", sizes:["P", "G", "36"], sample:true },
  { id:149, brand:"Beagle", name:"Colete Rosa conforto 09", price:267.25, img:null, gender:"Feminino", sizes:["M"], sample:true },
  { id:150, brand:"Beagle", name:"Parka Vinho minimalista 10", price:280.72, img:null, gender:"Masculino", sizes:["G", "36"], sample:true },
  { id:151, brand:"Beagle", name:"Blazer Azul urbano 11", price:294.19, img:null, gender:"Unissex", sizes:["GG", "38", "42"], sample:true },
  { id:152, brand:"Beagle", name:"Regata Mostarda alongado 12", price:307.66, img:null, gender:"Feminino", sizes:["36"], sample:true },
  { id:153, brand:"Beagle", name:"Shorts Bege contemporâneo 13", price:321.13, img:null, gender:"Masculino", sizes:["38", "42"], sample:true },
  { id:154, brand:"Beagle", name:"Cardigan Bordô versátil 14", price:334.60, img:null, gender:"Unissex", sizes:["40", "44", "48"], sample:true },
  { id:155, brand:"Beagle", name:"Tricô Grafite soft 15", price:348.07, img:null, gender:"Feminino", sizes:["42"], sample:true },
  { id:156, brand:"Beagle", name:"Conjunto Creme atemporal 16", price:361.54, img:null, gender:"Masculino", sizes:["44", "48"], sample:true },
  { id:157, brand:"Beagle", name:"Camiseta Jeans estampado 17", price:375.01, img:null, gender:"Unissex", sizes:["46", "Único", "P"], sample:true },
  { id:158, brand:"Beagle", name:"Camisa Lavanda texturizado 18", price:388.48, img:null, gender:"Feminino", sizes:["48"], sample:true },
  { id:159, brand:"Beagle", name:"Calça Telha conforto 19", price:401.95, img:null, gender:"Masculino", sizes:["Único", "P"], sample:true },
  { id:160, brand:"Beagle", name:"Jaqueta Oliva minimalista 20", price:415.42, img:null, gender:"Unissex", sizes:["PP", "M", "GG"], sample:true },

  // ==================== ABENÇÃO — 20 EXEMPLOS ====================
  { id:161, brand:"aBenção", name:"Camiseta Terracota clássico 01", price:170.86, img:null, gender:"Unissex", sizes:["42", "46"], sample:true },
  { id:162, brand:"aBenção", name:"Moletom Marinho básico 02", price:184.33, img:null, gender:"Feminino", sizes:["44", "48", "PP"], sample:true },
  { id:163, brand:"aBenção", name:"Blusa Verde premium 03", price:197.80, img:null, gender:"Masculino", sizes:["46"], sample:true },
  { id:164, brand:"aBenção", name:"Camisa Caramelo despojado 04", price:211.27, img:null, gender:"Unissex", sizes:["48", "PP"], sample:true },
  { id:165, brand:"aBenção", name:"Regata Cinza moderno 05", price:224.74, img:null, gender:"Feminino", sizes:["Único", "P", "G"], sample:true },
  { id:166, brand:"aBenção", name:"Cropped Rosa liso 06", price:238.21, img:null, gender:"Masculino", sizes:["PP"], sample:true },
  { id:167, brand:"aBenção", name:"Vestido Vinho essencial 07", price:251.68, img:null, gender:"Unissex", sizes:["P", "G"], sample:true },
  { id:168, brand:"aBenção", name:"Conjunto Azul casual 08", price:265.15, img:null, gender:"Feminino", sizes:["M", "GG", "38"], sample:true },
  { id:169, brand:"aBenção", name:"Calça Mostarda canelado 09", price:278.62, img:null, gender:"Masculino", sizes:["G"], sample:true },
  { id:170, brand:"aBenção", name:"Shorts Bege leve 10", price:292.09, img:null, gender:"Unissex", sizes:["GG", "38"], sample:true },
  { id:171, brand:"aBenção", name:"Jaqueta Bordô clássico 11", price:305.56, img:null, gender:"Feminino", sizes:["36", "40", "44"], sample:true },
  { id:172, brand:"aBenção", name:"Cardigan Grafite básico 12", price:319.03, img:null, gender:"Masculino", sizes:["38"], sample:true },
  { id:173, brand:"aBenção", name:"Suéter Creme premium 13", price:332.50, img:null, gender:"Unissex", sizes:["40", "44"], sample:true },
  { id:174, brand:"aBenção", name:"Colete Jeans despojado 14", price:345.97, img:null, gender:"Feminino", sizes:["42", "46", "Único"], sample:true },
  { id:175, brand:"aBenção", name:"Parka Lavanda moderno 15", price:359.44, img:null, gender:"Masculino", sizes:["44"], sample:true },
  { id:176, brand:"aBenção", name:"Kimono Telha liso 16", price:372.91, img:null, gender:"Unissex", sizes:["46", "Único"], sample:true },
  { id:177, brand:"aBenção", name:"Top Oliva essencial 17", price:386.38, img:null, gender:"Feminino", sizes:["48", "PP", "M"], sample:true },
  { id:178, brand:"aBenção", name:"Saia Areia casual 18", price:399.85, img:null, gender:"Masculino", sizes:["Único"], sample:true },
  { id:179, brand:"aBenção", name:"Macacão Preto canelado 19", price:413.32, img:null, gender:"Unissex", sizes:["PP", "M"], sample:true },
  { id:180, brand:"aBenção", name:"Capa Off-white leve 20", price:426.79, img:null, gender:"Feminino", sizes:["P", "G", "36"], sample:true },
];

/* Lista usada pelos botões de filtro de marca. */
const BRANDS = ["Anselmi","Biamar","Naguchi","DoceTrama","Alpelo","Paco Jeans","Ogochi","Beagle","aBenção"];

/* Tamanhos aceitos pelo filtro. Se o cadastro real usar outro padrão,
   altere esta lista e os tamanhos dentro dos produtos. */
const ALL_SIZES = ["PP","P","M","G","GG","36","38","40","42","44","46","48","Único"];

const PRICE_BOUNDS = {
  min: Math.floor(Math.min(...PRODUCTS.map(p => p.price)) / 10) * 10,
  max: Math.ceil(Math.max(...PRODUCTS.map(p => p.price)) / 10) * 10,
};

let cart = [];       // { id, qty }
let activeBrand = "Todos";
let filters = {
  gender: "Todos",
  sizes: [],                     // vazio = qualquer tamanho
  priceMin: PRICE_BOUNDS.min,
  priceMax: PRICE_BOUNDS.max,
};

const hangerSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a1.6 1.6 0 1 1 1.6 1.6"/><path d="M12 4.8V7"/><path d="M12 7 2.5 13.2A2 2 0 0 0 3.6 17h16.8a2 2 0 0 0 1.1-3.8L12 7z"/></svg>`;

function formatBRL(v){
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}

/* Segurança: os dados atuais são cadastrados diretamente no JS, mas esta
   função evita que uma futura informação vinda de formulário/API vire HTML.
   Use escapeHTML() sempre que um texto dinâmico entrar em innerHTML. */
function escapeHTML(value){
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function productImageMarkup(p){
  if (p.img){
    return `<img src="${escapeHTML(p.img)}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async">`;
  }
  return `<div class="swatch">${hangerSVG}<span>Fotos em breve</span></div>`;
}

/* ---------- DESTAQUES — CARROSSEL AUTOMÁTICO ALEATÓRIO ----------
   As 6 posições de destaque são preenchidas com produtos diferentes.
   A cada 4 segundos o conjunto é embaralhado, fazendo as imagens mudarem
   automaticamente. Para alterar a velocidade, troque 4000 abaixo. */
function renderDestaques(){
  const disponiveis = PRODUCTS.filter(p => p.img);
  const row = document.getElementById('destaqueRow');
  let destaques = [];

  function embaralhar(lista){
    return [...lista].sort(() => Math.random() - 0.5);
  }

  function desenhar(){
    destaques = embaralhar(disponiveis).slice(0, 6);
    row.innerHTML = destaques.map(p => `
      <div class="destaque-card" data-goto="${escapeHTML(p.brand)}">
        <div class="img-box">${productImageMarkup(p)}</div>
        <div class="info">
          <div class="brand-tag">${escapeHTML(p.brand)}</div>
          <p class="name">${escapeHTML(p.name)}</p>
        </div>
      </div>
    `).join('');

    row.querySelectorAll('.destaque-card').forEach(card => {
      card.addEventListener('click', () => {
        setActiveBrand(card.dataset.goto);
        document.getElementById('catalogo').scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  }

  desenhar();
  setInterval(desenhar, 4000);
}

function renderFilter(){
  const wrap = document.getElementById('brandFilter');
  const all = ["Todos", ...BRANDS];
  wrap.innerHTML = all.map(b => `<button class="pill ${b===activeBrand?'active':''}" data-brand="${escapeHTML(b)}">${escapeHTML(b)}</button>`).join('');
  wrap.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => setActiveBrand(btn.dataset.brand));
  });
}

function renderFilterPanel(){
  const panel = document.getElementById('filtersPanel');
  panel.innerHTML = `
    <div class="filter-group">
      <span class="filter-group-label">Gênero</span>
      <div class="chip-row" id="genderChips">
        ${["Todos","Feminino","Masculino"].map(g => `<button class="chip ${filters.gender===g?'active':''}" data-gender="${g}">${g}</button>`).join('')}
      </div>
    </div>
    <div class="filter-group">
      <span class="filter-group-label">Tamanho</span>
      <div class="chip-row" id="sizeChips">
        ${ALL_SIZES.map(s => `<button class="chip ${filters.sizes.includes(s)?'active':''}" data-size="${s}">${s}</button>`).join('')}
      </div>
    </div>
    <div class="filter-group price-filter">
      <span class="filter-group-label">Faixa de preço</span>
      <span class="price-values" id="priceValues">${formatBRL(filters.priceMin)} — ${formatBRL(filters.priceMax)}</span>
      <div class="price-slider">
        <div class="track"></div>
        <div class="range" id="priceRangeBar"></div>
        <input type="range" id="priceMinInput" min="${PRICE_BOUNDS.min}" max="${PRICE_BOUNDS.max}" step="10" value="${filters.priceMin}">
        <input type="range" id="priceMaxInput" min="${PRICE_BOUNDS.min}" max="${PRICE_BOUNDS.max}" step="10" value="${filters.priceMax}">
      </div>
    </div>
    <button class="clear-filters" id="clearFilters">Limpar filtros</button>
  `;
  panel.classList.remove('tab-animate');
  void panel.offsetWidth;
  panel.classList.add('tab-animate');

  panel.querySelectorAll('[data-gender]').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.gender = btn.dataset.gender;
      renderFilterPanel();
      renderGrid();
    });
  });

  panel.querySelectorAll('[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.size;
      filters.sizes = filters.sizes.includes(s)
        ? filters.sizes.filter(x => x !== s)
        : [...filters.sizes, s];
      renderFilterPanel();
      renderGrid();
    });
  });

  const minInput = document.getElementById('priceMinInput');
  const maxInput = document.getElementById('priceMaxInput');
  updatePriceRangeBar();

  minInput.addEventListener('input', () => {
    filters.priceMin = Math.min(parseInt(minInput.value,10), filters.priceMax);
    minInput.value = filters.priceMin;
    document.getElementById('priceValues').textContent = `${formatBRL(filters.priceMin)} — ${formatBRL(filters.priceMax)}`;
    updatePriceRangeBar();
    renderGrid();
  });
  maxInput.addEventListener('input', () => {
    filters.priceMax = Math.max(parseInt(maxInput.value,10), filters.priceMin);
    maxInput.value = filters.priceMax;
    document.getElementById('priceValues').textContent = `${formatBRL(filters.priceMin)} — ${formatBRL(filters.priceMax)}`;
    updatePriceRangeBar();
    renderGrid();
  });

  document.getElementById('clearFilters').addEventListener('click', () => {
    filters = { gender:"Todos", sizes:[], priceMin:PRICE_BOUNDS.min, priceMax:PRICE_BOUNDS.max };
    renderFilterPanel();
    renderGrid();
  });
}

function updatePriceRangeBar(){
  const span = PRICE_BOUNDS.max - PRICE_BOUNDS.min || 1;
  const left = ((filters.priceMin - PRICE_BOUNDS.min) / span) * 100;
  const right = ((filters.priceMax - PRICE_BOUNDS.min) / span) * 100;
  const bar = document.getElementById('priceRangeBar');
  bar.style.left = left + '%';
  bar.style.width = (right - left) + '%';
}

function setActiveBrand(brand){
  activeBrand = brand;
  renderFilter();
  renderGrid();
  updateTabBanner(brand);

  const catalogTitle = document.getElementById('catalogTitle');
  catalogTitle.textContent = brand === "Todos" ? "Todos os produtos" : brand;
  catalogTitle.classList.remove('tab-animate');
  void catalogTitle.offsetWidth;
  catalogTitle.classList.add('tab-animate');
}

function updateTabBanner(brand){
  const banner = document.getElementById('tabBanner');
  if (brand === "Todos"){
    banner.style.display = 'none';
    banner.innerHTML = '';
    return;
  }
  banner.style.display = 'block';
  banner.innerHTML = `<h3>${escapeHTML(brand)}</h3><p>Confira as peças exclusivas da marca ${escapeHTML(brand)}</p>`;
  banner.classList.remove('tab-animate');
  void banner.offsetWidth;
  banner.classList.add('tab-animate');
}

function qtyInCart(id, size){
  const item = cart.find(c => c.id === id && c.size === size);
  return item ? item.qty : 0;
}

function renderGrid(){
  const grid = document.getElementById('productGrid');

  const list = PRODUCTS.filter(p => {
    if (activeBrand !== "Todos" && p.brand !== activeBrand) return false;
    if (filters.gender !== "Todos" && p.gender !== filters.gender && p.gender !== "Unissex") return false;
    if (filters.sizes.length > 0 && !p.sizes.some(s => filters.sizes.includes(s))) return false;
    if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
    return true;
  });

  if (list.length === 0){
    grid.innerHTML = `<div class="empty-state">Nenhum produto encontrado com esses filtros.<br>Tente limpar algum filtro.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="card">
      <div class="img-box">
        ${productImageMarkup(p)}
        ${p.sample ? '<span class="sample-flag">exemplo</span>' : ''}
      </div>
      <div class="info">
        <div class="brand-tag">${escapeHTML(p.brand)}</div>
        <p class="name">${escapeHTML(p.name)}</p>
        <p class="meta-line">${escapeHTML(p.gender)}</p>
        <p class="price">${formatBRL(p.price)}</p>
        <div class="size-row">
          <label class="size-label" for="size-${p.id}">Tamanho</label>
          <select class="size-select" id="size-${p.id}" data-size-id="${p.id}">
            <option value="" disabled selected>Escolher</option>
            ${p.sizes.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('')}
          </select>
        </div>
        <div class="qty-row">
          <div class="qty-stepper">
            <button data-act="dec" data-id="${p.id}" aria-label="Diminuir quantidade">−</button>
            <span id="qty-${p.id}">1</span>
            <button data-act="inc" data-id="${p.id}" aria-label="Aumentar quantidade">+</button>
          </div>
          <button class="add-btn" data-add="${p.id}">Adicionar</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-act]').forEach(btn => {
    btn.addEventListener('click', () => {
      const span = grid.querySelector(`#qty-${btn.dataset.id}`);
      let val = parseInt(span.textContent, 10);
      val = btn.dataset.act === 'inc' ? val + 1 : Math.max(1, val - 1);
      span.textContent = val;
    });
  });

  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.add, 10);
      const sizeSelect = grid.querySelector(`#size-${id}`);
      const size = sizeSelect.value;
      if (!size){
        sizeSelect.classList.remove('invalid');
        void sizeSelect.offsetWidth;
        sizeSelect.classList.add('invalid');
        sizeSelect.focus();
        return;
      }
      const span = grid.querySelector(`#qty-${id}`);
      const qty = parseInt(span.textContent, 10);
      addToCart(id, qty, size);
      span.textContent = 1;
      sizeSelect.selectedIndex = 0;
      sizeSelect.classList.remove('invalid');
      btn.classList.add('added');
      btn.textContent = 'Adicionado ✓';
      setTimeout(() => { btn.classList.remove('added'); btn.textContent = 'Adicionar'; }, 1200);
    });
  });
}

function pulseCartBadges(){
  ['cartCountTop','cartFabBadge'].forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('pulse');
    void el.offsetWidth; // reinicia a animação mesmo em cliques seguidos
    el.classList.add('pulse');
  });
}

function addToCart(id, qty, size){
  const existing = cart.find(c => c.id === id && c.size === size);
  if (existing){ existing.qty += qty; }
  else { cart.push({ id, qty, size }); }
  renderCart();
  pulseCartBadges();
}

function changeCartQty(id, size, delta){
  const item = cart.find(c => c.id === id && c.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){ cart = cart.filter(c => !(c.id === id && c.size === size)); }
  renderCart();
  if (delta > 0) pulseCartBadges();
}

function removeFromCart(id, size){
  cart = cart.filter(c => !(c.id === id && c.size === size));
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum, c) => {
    const p = PRODUCTS.find(pp => pp.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);
}

function renderCart(){
  const count = cart.reduce((n, c) => n + c.qty, 0);
  document.getElementById('cartCountTop').textContent = count;
  document.getElementById('cartFabBadge').textContent = count;

  const itemsWrap = document.getElementById('cartItems');
  if (cart.length === 0){
    itemsWrap.innerHTML = `<div class="empty-state">Seu carrinho está vazio.<br>Adicione peças para começar.</div>`;
  } else {
    itemsWrap.innerHTML = cart.map(c => {
      const p = PRODUCTS.find(pp => pp.id === c.id);
      return `
        <div class="cart-item">
          <div class="thumb">${p.img ? `<img src="${p.img}" alt="${escapeHTML(p.name)}">` : hangerSVG}</div>
          <div class="details">
            <div class="brand-tag">${escapeHTML(p.brand)}</div>
            <p class="name">${escapeHTML(p.name)}</p>
            <p class="meta-line">Tamanho: ${escapeHTML(c.size)}</p>
            <div class="row-bottom">
              <div class="qty-stepper">
                <button data-cart-act="dec" data-cart-id="${p.id}" data-cart-size="${escapeHTML(c.size)}" aria-label="Diminuir">−</button>
                <span>${c.qty}</span>
                <button data-cart-act="inc" data-cart-id="${p.id}" data-cart-size="${escapeHTML(c.size)}" aria-label="Aumentar">+</button>
              </div>
              <span class="unit-price">${formatBRL(p.price * c.qty)}</span>
            </div>
          </div>
        </div>
        <button class="remove-link" data-remove="${p.id}" data-remove-size="${escapeHTML(c.size)}">Remover</button>
      `;
    }).join('');

    itemsWrap.querySelectorAll('[data-cart-act]').forEach(btn => {
      btn.addEventListener('click', () => {
        changeCartQty(parseInt(btn.dataset.cartId,10), btn.dataset.cartSize, btn.dataset.cartAct === 'inc' ? 1 : -1);
      });
    });
    itemsWrap.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.remove,10), btn.dataset.removeSize));
    });
  }

  document.getElementById('cartTotal').textContent = formatBRL(cartTotal());
  document.getElementById('checkoutBtn').disabled = cart.length === 0;
}

/* Mensagem enviada ao WhatsApp.
   IMPORTANTE: o site NÃO confirma estoque, pagamento ou entrega sozinho.
   O WhatsApp é a etapa de conferência e fechamento do pedido. */
function buildWhatsAppMessage(){
  let msg = "Olá! Gostaria de finalizar um pedido na Duo Store:\n\n";
  cart.forEach(c => {
    const p = PRODUCTS.find(pp => pp.id === c.id);
    if (!p) return;
    msg += `${c.qty}x ${p.name} (${p.brand}) — Tamanho ${c.size} — ${formatBRL(p.price)} cada\n`;
  });
  msg += `\nSubtotal informado pelo site: ${formatBRL(cartTotal())}\n\n`;
  msg += "Por favor, confirme a disponibilidade/estoque das peças, a forma de pagamento e o valor/finalização da entrega ou retirada. Quero concluir o pedido pelo WhatsApp.";
  return msg;
}

/* ---------- Abrir/fechar carrinho ---------- */
function openCart(){
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function closeCart(){
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

document.getElementById('cartFab').addEventListener('click', openCart);
document.getElementById('cartToggleTop').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('overlay').addEventListener('click', closeCart);
document.getElementById('continueShopping').addEventListener('click', closeCart);

document.getElementById('heroCta').addEventListener('click', () => {
  document.getElementById('catalogo').scrollIntoView({behavior:'smooth', block:'start'});
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  const text = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
});

document.getElementById('footerWhats').addEventListener('click', (e) => {
  e.preventDefault();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
});

/* ---------- Iniciar ---------- */
renderDestaques();
renderFilter();
renderFilterPanel();
renderGrid();
renderCart();
