//7:57 1 7:58
function printReceipt(barcodes) {
        const products = decodeBarcodes(barcodes)
        const result = generateReceipt(products);
        console.log(result);
}
//7:43 1 7:44
function decodeBarcodes(barcodes){
    var products = getProducts(countBarcodes(barcodes));
    return calculateProductsSubtotals(products);
}
//7:20 7:28 p:5min
function countBarcodes(barcodes){
    let result = [];
    barcodes.map(barcode=>{
         const one = result.find(item=>item.id == barcode)
        if(one!=undefined){
            one.num++;
        }else{
            result.push({
                id:barcode,
                num:1
            });
        }
    })
    return result;
}
//7:29 10 7:38
function getProducts(barcodeObjs){
    const data = getDataFromDB();
    //filter the data from barcodes
    let result = [];
    barcodeObjs.map(item => {
       let productFromDB = data.find(one => one.barcode == item.id);
       productFromDB.num = item.num;
       result.push(productFromDB);
    })
    return result;
}
//7:40 3 7:42
function calculateProductsSubtotals(products){
    products.map(product =>{
        product.subtotal = product.price*product.num;
    });
    return products;
}
//7:56 2 7:57
function generateReceipt(products){
    let productsTotal = calculateProductsTotal(products);
    return connectProductsString(products,productsTotal);
}
//7:44 2 7:47 map中的product写成了products 重新review代码发现错误
function calculateProductsTotal(products){
    let result = 0;
    products.map(product =>{
        result += product.subtotal;
    })
    return result;
}
//7:48 10 7:55
function connectProductsString(products,productsTotal){
    var result = "\n";
        result += "***<store earning no money>Receipt ***\n";
    products.map(product =>{
        result += "Name: ";
        result += product.name;
        result += ", Quantity: ";
        result += product.num;
        result += ", Unit price: ";
        result += product.price;
        result += " (yuan), Subtotal: ";
        result += product.subtotal;
        result += " (yuan)";
        result += "\n";
    })
    result += "----------------------";
    result += "\n";
    result += "Total: "+productsTotal+" (yuan)";
    result += "\n";
    result += "**********************";
    return result;
}
function getDataFromDB(){
    let data = [
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
     return data;
}/*  */
module.exports = {
    printReceipt
};



