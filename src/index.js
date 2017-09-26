module.exports = function multiply(first, second) {
		var arr1 = first.split(''); // разбиваем строку в массив по одному элементу = цифра числа
		var arr2 = second.split('');
		var arrNum1 = arr1.map(Number).reverse(); // преобразуем в числовой массив и переворачиваем
		var arrNum2 = arr2.map(Number).reverse();
		var newArr =[];
		
		for (i = 0; i < arrNum1.length; i++) {  		// переумножаем цифры и добавляем в новый массив, складывая по разрядам
			for (j = 0; j < arrNum2.length; j++) {
				var x = newArr[i+j] || 0;  		// определяем предыдущее число нужного индекса массива 
				newArr[i+j] = (arrNum2[j]*arrNum1[i] + x);
			}
		}
		
		for (i = 0; i < newArr.length; i++) {  		// избавляемся от лишних разрядов и суммируем числа
			var x = Math.floor(newArr[i] / 10);
			newArr[i] = newArr[i] % 10;
			if (x != 0) {
				if (newArr[i+1]) {
					newArr[i+1] = newArr[i+1] + x;
				} else {
					newArr[i+1] = x;
				}
			}
		}
		
		return result = newArr.reverse().join(''); //преворачиваем массив обратно и преобразум в строку 
		
}
