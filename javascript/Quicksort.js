function quicksort() {
    var inputNumbers = document.getElementById('inputNumbers').value;
    var numbersArray = inputNumbers.split(' ').map(Number);

    if (numbersArray.length === 8) {
        quickSort(numbersArray, 0, numbersArray.length - 1);
        document.getElementById('sortedNumbers').textContent = 'Números Ordenados: ' + numbersArray.join(' ');
    } else {
        document.getElementById('sortedNumbers').textContent = 'Forneça exatamente 8 números separados por espaços.';
    }
}

function quickSort(arr, low, high) {
    if (low < high) {
        var pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    var pivot = arr[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}