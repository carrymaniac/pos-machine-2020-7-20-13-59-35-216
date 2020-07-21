# MY PDCA

## P
- function countBarcodes (5 mins)
- function getProducts (10 mins)
- function calculateProductsSubtotals (3 mins)
- function decodeBarcodes (1 mins)
- function calculateProductsTotal(1 mins)
- function connectProductsString (10 mins)
- function generateReceipt (1 mins)
- function printReceipt  (1 mins)


## D
- function countBarcodes (8min)
- function getProducts (9 mins)
- function calculateProductsSubtotals (3 mins)
- function decodeBarcodes (1 mins)
- function calculateProductsTotal(3 mins)
- function connectProductsString (7 mins)
- function generateReceipt (1 mins)
- function printReceipt  (2 mins)


## C
- function countBarcodes 发生了超时，主要是对find()方法的使用不了解，画了时间去查询find方法的使用方式
- function getProducts 和预计的时间基本一致
- function calculateProductsSubtotals  和预计的时间基本一致
- function decodeBarcodes 根据context图的关系调用方法传递参数即可，比较简单，和预计的时间基本一致
- function calculateProductsTotal 其中的map中的product写成了products 重新review代码发现错误,比预计的时间多花了2分钟debug
- function connectProductsString 最繁琐的方法，将之前处理完成的数据进行字符串拼装，并处理换行等问题，实际时间比预计的时间稍微少了2分钟，因为通过上一个实验对字符串的拼接进行了练习。
- function generateReceipt 根据context图的关系调用方法传递参数即可，比较简单，和预计的时间基本一致
- function printReceipt  进行jest测试，test失败，经过查看日志发现了字符串的开头也需要一个换行符，添加后通过测试。


## A
- 之后需要对js中的find方法和map方法进行练习掌握，这两个方法在数据的处理上十分常见
- 在变量的命名和书写上要规范注意，例如products和product的区别。
- 字符串的处理和拼接还需要继续练习。
- 根据context map从最具体的task开始进行实现，完成一个function进行测试，再继续一步步往上递推即可完成大的任务要求。





