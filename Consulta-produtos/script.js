const products = {
    EMC: [
        { modelo: "CONEXÃO RETA", rosca: "M5", tubo: "4 MM", codigo: "60919" },
        { modelo: "CONEXÃO RETA", rosca: "M5", tubo: "6 MM", codigo: "60923" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "4 MM", codigo: "60921" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "6 MM", codigo: "60924" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "8 MM", codigo: "60928" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "10 MM", codigo: "60932" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "12 MM", codigo: "60936" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "4 MM", codigo: "60922" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "6 MM", codigo: "60925" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "8 MM", codigo: "60929" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "10 MM", codigo: "60933" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "12 MM", codigo: "60937" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "6 MM", codigo: "60926" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "8 MM", codigo: "60930" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "10 MM", codigo: "60934" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "12 MM", codigo: "60938" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "6 MM", codigo: "60927" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "8 MM", codigo: "60931" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "10 MM", codigo: "60935" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "12 MM", codigo: "60939" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "14 MM", codigo: "60942" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "16 MM", codigo: "60945" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "M5", tubo: "4 MM", codigo: "71741" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "M5", tubo: "6 MM", codigo: "60947" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "4 MM", codigo: "60946" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "6 MM", codigo: "60948" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "8 MM", codigo: "60951" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "10 MM", codigo: "60956" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "12 MM", codigo: "60961" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "4 MM", codigo: "83585" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "6 MM", codigo: "60949" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "8 MM", codigo: "60952" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "10 MM", codigo: "60958" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "12 MM", codigo: "60962" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "6 MM", codigo: "60950" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "8 MM", codigo: "60953" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "10 MM", codigo: "60959" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "12 MM", codigo: "60963" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "6 MM", codigo: "83584" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "8 MM", codigo: "60954" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "10 MM", codigo: "60960" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "12 MM", codigo: "60964" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "14 MM", codigo: "60965" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "16 MM", codigo: "60966" },
        { modelo: "CONTROLE DE FLUXO", rosca: "M5", tubo: "4 MM", codigo: "65667" },
        { modelo: "CONTROLE DE FLUXO", rosca: "M5", tubo: "6 MM", codigo: "65670" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "4 MM", codigo: "65668" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "6 MM", codigo: "65186" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "8 MM", codigo: "65188" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "10 MM", codigo: "65675" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "12 MM", codigo: "65678" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "4 MM", codigo: "65669" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "6 MM", codigo: "65187" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "8 MM", codigo: "65189" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "10 MM", codigo: "65190" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "12 MM", codigo: "65679" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "6 MM", codigo: "65671" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "8 MM", codigo: "65673" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "10 MM", codigo: "65676" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "12 MM", codigo: "65680" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "6 MM", codigo: "65672" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "8 MM", codigo: "65674" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "10 MM", codigo: "65677" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "12 MM", codigo: "65681" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "4 MM", codigo: "60978" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "6 MM", codigo: "60980" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "8 MM", codigo: "60981" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "10 MM", codigo: "60982" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "12 MM", codigo: "60983" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "14 MM", codigo: "60984" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "16 MM", codigo: "60985" },
        { modelo: "UNIÃO T", rosca: "", tubo: "4 MM", codigo: "60967" },
        { modelo: "UNIÃO T", rosca: "", tubo: "6 MM", codigo: "60968" },
        { modelo: "UNIÃO T", rosca: "", tubo: "8 MM", codigo: "60969" },
        { modelo: "UNIÃO T", rosca: "", tubo: "10 MM", codigo: "60970" },
        { modelo: "UNIÃO T", rosca: "", tubo: "12 MM", codigo: "60971" },
        { modelo: "UNIÃO T", rosca: "", tubo: "14 MM", codigo: "60972" },
        { modelo: "UNIÃO T", rosca: "", tubo: "16 MM", codigo: "60973" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "4 MM", codigo: "70485" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "6 MM", codigo: "60974" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "8 MM", codigo: "60975" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "10 MM", codigo: "60976" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "12 MM", codigo: "60977" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "14 MM", codigo: "70291" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "16 MM", codigo: "70292" },
        { modelo: "UNIÃO L", rosca: "", tubo: "4 MM", codigo: "60986" },
        { modelo: "UNIÃO L", rosca: "", tubo: "6 MM", codigo: "60987" },
        { modelo: "UNIÃO L", rosca: "", tubo: "8 MM", codigo: "60988" },
        { modelo: "UNIÃO L", rosca: "", tubo: "10 MM", codigo: "60989" },
        { modelo: "UNIÃO L", rosca: "", tubo: "12 MM", codigo: "60990" },
        { modelo: "UNIÃO L", rosca: "", tubo: "14 MM", codigo: "70294" },
        { modelo: "UNIÃO L", rosca: "", tubo: "16 MM", codigo: "70295" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "4 MM", codigo: "70337" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "6 MM", codigo: "60997" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "8 MM", codigo: "60998" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "10 MM", codigo: "60999" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "12 MM", codigo: "61000" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "14 MM", codigo: "61001" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "16 MM", codigo: "61002" }
    ],
    SYSTEM: [
        { modelo: "CONEXÃO RETA", rosca: "M5", tubo: "4 MM", codigo: "28432" },
        { modelo: "CONEXÃO RETA", rosca: "M5", tubo: "6 MM", codigo: "28433" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "4 MM", codigo: "28434" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "6 MM", codigo: "28435" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "8 MM", codigo: "28436" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "10 MM", codigo: "40987" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "12 MM", codigo: "58177" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "4 MM", codigo: "28427" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "6 MM", codigo: "28428" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "8 MM", codigo: "28429" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "10 MM", codigo: "28430" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "12 MM", codigo: "28431" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "6 MM", codigo: "17894" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "8 MM", codigo: "28424" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "10 MM", codigo: "28425" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "12 MM", codigo: "28426" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "6 MM", codigo: "58587" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "8 MM", codigo: "41360" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "10 MM", codigo: "28422" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "12 MM", codigo: "28423" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "M5", tubo: "4 MM", codigo: "28447" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "M5", tubo: "6 MM", codigo: "28448" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "4 MM", codigo: "28449" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "6 MM", codigo: "28458" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "8 MM", codigo: "28459" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "10 MM", codigo: "40986" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "12 MM", codigo: "58370" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "4 MM", codigo: "28442" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "6 MM", codigo: "28443" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "8 MM", codigo: "28444" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "10 MM", codigo: "28445" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "12 MM", codigo: "28446" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "6 MM", codigo: "15727" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "8 MM", codigo: "28438" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "10 MM", codigo: "28440" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "12 MM", codigo: "28441" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "6 MM", codigo: "58175" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "8 MM", codigo: "51522" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "10 MM", codigo: "35971" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "12 MM", codigo: "28437" },
        { modelo: "CONTROLE DE FLUXO", rosca: "M5", tubo: "4 MM", codigo: "41539" },
        { modelo: "CONTROLE DE FLUXO", rosca: "M5", tubo: "6 MM", codigo: "41540" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "4 MM", codigo: "41538" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "6 MM", codigo: "28486" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "8 MM", codigo: "34023" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "4 MM", codigo: "41536" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "6 MM", codigo: "28484" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "8 MM", codigo: "28485" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "10 MM", codigo: "40871" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "8 MM", codigo: "41537" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "10 MM", codigo: "40870" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "10 MM", codigo: "41310" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "12 MM", codigo: "40052" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "4 MM", codigo: "28472" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "6 MM", codigo: "28473" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "8 MM", codigo: "28475" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "10 MM", codigo: "28476" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "12 MM", codigo: "28477" },
        { modelo: "UNIÃO T", rosca: "", tubo: "4 MM", codigo: "28479" },
        { modelo: "UNIÃO T", rosca: "", tubo: "6 MM", codigo: "28480" },
        { modelo: "UNIÃO T", rosca: "", tubo: "8 MM", codigo: "28481" },
        { modelo: "UNIÃO T", rosca: "", tubo: "10 MM", codigo: "28482" },
        { modelo: "UNIÃO T", rosca: "", tubo: "12 MM", codigo: "38747" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "4 MM", codigo: "54615" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "6 MM", codigo: "39237" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "8 MM", codigo: "39238" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "10 MM", codigo: "35787" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "12 MM", codigo: "53172" },
        { modelo: "UNIÃO L", rosca: "", tubo: "4 MM", codigo: "34536" },
        { modelo: "UNIÃO L", rosca: "", tubo: "6 MM", codigo: "34535" },
        { modelo: "UNIÃO L", rosca: "", tubo: "8 MM", codigo: "28478" },
        { modelo: "UNIÃO L", rosca: "", tubo: "10 MM", codigo: "43011" },
        { modelo: "UNIÃO L", rosca: "", tubo: "12 MM", codigo: "36896" },
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "4 MM", codigo: "63493"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "6 MM", codigo: "42275"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "8 MM", codigo: "31135"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "10 MM", codigo: "50493"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "12 MM", codigo: "58426"}
    ],
    METALWORK: [
        { modelo: "CONEXÃO RETA", rosca: "M5", tubo: "4 MM", codigo: "3172" },
        { modelo: "CONEXÃO RETA", rosca: "M5", tubo: "6 MM", codigo: "14507" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "4 MM", codigo: "13960" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "6 MM", codigo: "5315" },
        { modelo: "CONEXÃO RETA", rosca: "1/8", tubo: "8 MM", codigo: "6189" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "4 MM", codigo: "14347" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "6 MM", codigo: "12784" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "8 MM", codigo: "5320" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "10 MM", codigo: "6201" },
        { modelo: "CONEXÃO RETA", rosca: "1/4", tubo: "12 MM", codigo: "14508" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "8 MM", codigo: "6202" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "10 MM", codigo: "6203" },
        { modelo: "CONEXÃO RETA", rosca: "3/8", tubo: "12 MM", codigo: "14523" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "10 MM", codigo: "47870" },
        { modelo: "CONEXÃO RETA", rosca: "1/2", tubo: "12 MM", codigo: "14528" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "M5", tubo: "4 MM", codigo: "18986" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "M5", tubo: "6 MM", codigo: "36098" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "4 MM", codigo: "15493" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "6 MM", codigo: "28253" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/8", tubo: "8 MM", codigo: "15593" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "4 MM", codigo: "22754" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "6 MM", codigo: "3032" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "8 MM", codigo: "17482" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/4", tubo: "10 MM", codigo: "58513" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "8 MM", codigo: "22793" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "10 MM", codigo: "60214" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "3/8", tubo: "12 MM", codigo: "69093" },
        { modelo: "CONEXÃO GIRATÓRIA", rosca: "1/2", tubo: "12 MM", codigo: "68507" },
        { modelo: "CONTROLE DE FLUXO", rosca: "M5", tubo: "4 MM", codigo: "34257" },
        { modelo: "CONTROLE DE FLUXO", rosca: "M5", tubo: "6 MM", codigo: "34258" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "4 MM", codigo: "39006" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "6 MM", codigo: "34340" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/8", tubo: "8 MM", codigo: "34261" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "6 MM", codigo: "34259" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "8 MM", codigo: "34263" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "10 MM", codigo: "34264" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/4", tubo: "12 MM", codigo: "34265" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "10 MM", codigo: "45569" },
        { modelo: "CONTROLE DE FLUXO", rosca: "3/8", tubo: "12 MM", codigo: "34266" },
        { modelo: "CONTROLE DE FLUXO", rosca: "1/2", tubo: "12 MM", codigo: "34267" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "4 MM", codigo: "48044" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "6 MM", codigo: "36108" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "8 MM", codigo: "36109" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "10 MM", codigo: "36110" },
        { modelo: "UNIÃO RETA", rosca: "", tubo: "12 MM", codigo: "36111" },
        { modelo: "UNIÃO T", rosca: "", tubo: "4 MM", codigo: "36103" },
        { modelo: "UNIÃO T", rosca: "", tubo: "6 MM", codigo: "36104" },
        { modelo: "UNIÃO T", rosca: "", tubo: "8 MM", codigo: "36105" },
        { modelo: "UNIÃO T", rosca: "", tubo: "10 MM", codigo: "36106" },
        { modelo: "UNIÃO T", rosca: "", tubo: "12 MM", codigo: "36107" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "4 MM", codigo: "34459" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "6 MM", codigo: "14643" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "8 MM", codigo: "17696" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "10 MM", codigo: "53750" },
        { modelo: "UNIÃO Y", rosca: "", tubo: "12 MM", codigo: "58802" },
        { modelo: "UNIÃO L", rosca: "", tubo: "6 MM", codigo: "58990"},
        { modelo: "UNIÃO L", rosca: "", tubo: "8 MM", codigo: "58491"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "4 MM", codigo: "36408"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "6 MM", codigo: "27972"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "8 MM", codigo: "17282"},
        { modelo: "UNIÃO PAINEL", rosca: "", tubo: "10 MM", codigo: "18983"},
        { modelo: "LUVA", rosca: "1/8", tubo: "", codigo: "17046"},
        { modelo: "LUVA", rosca: "1/4", tubo: "", codigo: "18848"},
        { modelo: "LUVA", rosca: "3/8", tubo: "", codigo: "17064"},
        { modelo: "LUVA", rosca: "1/2", tubo: "", codigo: "17072"},
        { modelo: "BUJÃO", rosca: "1/8", tubo: "", codigo: "9939"},
        { modelo: "BUJÃO", rosca: "1/4", tubo: "", codigo: "12766"},
        { modelo: "BUJÃO", rosca: "3/8", tubo: "", codigo: "17139"},
        { modelo: "BUJÃO", rosca: "1/2", tubo: "", codigo: "17154"},
        { modelo: "NIPLE", rosca: "1/8", rosca2: "1/8", tubo:"" , codigo: "15050"},
        { modelo: "NIPLE", rosca: "1/4", rosca2: "1/4", tubo:"" , codigo: "11613"},
        { modelo: "NIPLE", rosca: "3/8", rosca2: "3/8", tubo:"" , codigo: "18845"},
        { modelo: "NIPLE", rosca: "1/2", rosca2: "1/2", tubo:"" , codigo: "12326"},
        { modelo: "NIPLE", rosca: "M5", rosca2: "1/8", tubo:"" , codigo: "27906"},
        { modelo: "NIPLE", rosca: "1/8", rosca2: "1/4", tubo:"" , codigo: "17702"},
        { modelo: "NIPLE", rosca: "1/8", rosca2: "3/8", tubo:"" , codigo: "15051"},
        { modelo: "NIPLE", rosca: "1/4", rosca2: "3/8", tubo:"" , codigo: "15052"},
        { modelo: "NIPLE", rosca: "1/4", rosca2: "1/2", tubo:"" , codigo: "16026"},
        { modelo: "NIPLE", rosca: "3/8", rosca2: "1/2", tubo:"" , codigo: "18846"},
        { modelo: "NIPLE", rosca: "1/2", rosca2: "3/4", tubo:"" , codigo: "18847"},
        { modelo: "NIPLE", rosca: "1/8", rosca2: "M5", tubo:"" , codigo: "27906"},
        { modelo: "NIPLE", rosca: "1/4", rosca2: "1/8", tubo:"" , codigo: "17702"},
        { modelo: "NIPLE", rosca: "3/8", rosca2: "1/8", tubo:"" , codigo: "15051"},
        { modelo: "NIPLE", rosca: "3/8", rosca2: "1/4", tubo:"" , codigo: "15052"},
        { modelo: "NIPLE", rosca: "1/2", rosca2: "1/4", tubo:"" , codigo: "16026"},
        { modelo: "NIPLE", rosca: "1/2", rosca2: "3/8", tubo:"" , codigo: "18846"},
        { modelo: "NIPLE", rosca: "3/4", rosca2: "1/2", tubo:"" , codigo: "18847"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/8", rosca2: "1/4", tubo:"" , codigo: "1398"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/8", rosca2: "3/8", tubo:"" , codigo: "17020"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/4", rosca2: "3/8", tubo:"" , codigo: "12331"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/4", rosca2: "1/2", tubo:"" , codigo: "17023"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "3/8", rosca2: "1/2", tubo:"" , codigo: "12332"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/4", rosca2: "1/8", tubo:"" , codigo: "1398"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "3/8", rosca2: "1/8", tubo:"" , codigo: "17020"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "3/8", rosca2: "1/4", tubo:"" , codigo: "12331"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/2", rosca2: "1/4", tubo:"" , codigo: "17023"},
        { modelo: "BUCHA DE REDUÇÃO", rosca: "1/2", rosca2: "3/8", tubo:"" , codigo: "12332"}
    ]
};
const imagensProdutos = {
    "CONEXÃO RETA": {
        EMC: "images/EMC RETA.png",
        SYSTEM: "images/SISTEM RETA PLASTICO.png",
        METALWORK: "images/METALWORK RETA PLASTICO.png"
    },
    "CONEXÃO GIRATÓRIA": {
        EMC: "images/EMC GIRATORIA.png",
        SYSTEM: "images/SISTEM GIRATORIA PLASTICO.png",
        METALWORK: "images/METALWORK GIRATORIA PLASTICO.png"
    },
    "CONTROLE DE FLUXO": {
        EMC: "images/EMC FLUXO.png",
        SYSTEM: "images/SISTEM FLUXO.png",
        METALWORK: "images/METALWORK FLUXO.png"
    },
    "UNIÃO RETA": {
        EMC: "images/EMC UNIAO RETA.png",
        SYSTEM: "images/SISTEM UNIAO RETA PLASTICO.png",
        METALWORK: "images/METALWORK UNIAO RETA PLASTICO.png"
    },
    "UNIÃO L": {
        EMC: "images/EMC UNIAO L.png",
        SYSTEM: "images/SISTEM UNIAO L PLASTICO.png",
        METALWORK: "images/METALWORK UNIAO L PLASTICO.png"
    },
    "UNIÃO T": {
        EMC: "images/EMC UNIAO T.png",
        SYSTEM: "images/SISTEM UNIAO T PLASTICO.png",
        METALWORK: "images/METALWORK UNIAO T PLASTICO.png"
    },
    "UNIÃO Y": {
        EMC: "images/EMC UNIAO Y.png",
        SYSTEM: "images/SISTEM UNIAO Y PLASTICO.png",
        METALWORK: "images/METALWORK UNIAO Y PLASTICO.png"
    },
    "UNIÃO PAINEL": {
        EMC: "images/EMC UNIAO PAINEL.png",
        SYSTEM: "images/SISTEM UNIAO PAINEL.png",
        METALWORK: "images/METALWORK UNIAO PAINEL.png"
    },
    "LUVA": {
        METALWORK: "images/METALWORK LUVA.png"
    },
    "NIPLE": {
        METALWORK: "images/METALWORK NIPLE.png"
    },
    "BUJÃO": {
        METALWORK: "images/METALWORK BUJAO.png"
    },
    "BUCHA DE REDUÇÃO": {
        METALWORK: "images/METALWORK REDUCAO.png"
    },
};

document.getElementById('tipo').addEventListener('change', function() {
    const tipo = this.value;
    const roscaGroup = document.getElementById('roscaGroup');
    const tuboGroup = document.getElementById('tuboGroup');
    const rosca2Group = document.getElementById('rosca2Group');

    if (["UNIÃO RETA", "UNIÃO T", "UNIÃO Y", "UNIÃO L", "UNIÃO PAINEL"].includes(tipo)) {
        roscaGroup.style.display = 'none';
        tuboGroup.style.display = 'block';
        rosca2Group.style.display = 'none';
    } else if (["LUVA", "BUJÃO"].includes(tipo)) {
        roscaGroup.style.display = 'block';
        tuboGroup.style.display = 'none';
        rosca2Group.style.display = 'none';
    } else if (["BUCHA DE REDUÇÃO", "NIPLE"].includes(tipo)) {
        roscaGroup.style.display = 'block';
        tuboGroup.style.display = 'none';
        rosca2Group.style.display = 'block';
    } else {
        roscaGroup.style.display = 'block';
        tuboGroup.style.display = 'block';
        rosca2Group.style.display = 'none';
    }

    searchProducts();
});

document.getElementById('rosca').addEventListener('change', searchProducts);
document.getElementById('tubo').addEventListener('change', searchProducts);
document.getElementById('rosca2').addEventListener('change', searchProducts);

function searchProducts() {
    const tipo = document.getElementById('tipo').value;
    const rosca = document.getElementById('rosca').value;
    const tubo = document.getElementById('tubo').value;
    const rosca2 = document.getElementById('rosca2').value;

    const results = {
        EMC: [],
        SYSTEM: [],
        METALWORK: []
    };

    for (const brand in products) {
        products[brand].forEach(product => {
            if (product.modelo === tipo) {
                if (["UNIÃO RETA", "UNIÃO T", "UNIÃO Y", "UNIÃO L", "UNIÃO PAINEL"].includes(tipo)) {
                    if (product.tubo === tubo) {
                        results[brand].push(product);
                    }
                } else if (["LUVA", "BUJÃO"].includes(tipo)) {
                    if (product.rosca === rosca) {
                        results[brand].push(product);
                    }
                } else if (["BUCHA DE REDUÇÃO", "NIPLE"].includes(tipo)) {
                    if (product.rosca === rosca && product.rosca2 === rosca2) {
                        results[brand].push(product);
                    }
                } else {
                    if (product.rosca === rosca && product.tubo === tubo) {
                        results[brand].push(product);
                    }
                }
            }
        });
    }

    displayResults(results);
}

function displayResults(results) {
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';

    const tipo = document.getElementById('tipo').value;

    for (const brand in results) {
        if (results[brand].length > 0) {
            const imgSrc = imagensProdutos[tipo]?.[brand] || "images/default.png";
            const brandResults = document.createElement('div');
            brandResults.className = 'brand-results';
            brandResults.innerHTML = `
                <h3>${brand}</h3>
                <div class="product-result">
                    <img src="${imgSrc}" alt="${tipo} ${brand}" class="product-image">
                    <ul>
                        ${results[brand].map(product => `<li>Código: ${product.codigo}</li>`).join('')}
                    </ul>
                </div>
            `;
            resultsGrid.appendChild(brandResults);

            setTimeout(() => {
                brandResults.classList.add('visible');
                const image = brandResults.querySelector('.product-image');
                if (image) {
                    setTimeout(() => image.classList.add('visible'), 100);
                }
            }, 100);
        }
    }
}