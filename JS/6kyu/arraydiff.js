a = [1,2,2,1];
b = [1];

    function arrayDiff(a, b) {
        return a.filter((element) => !b.includes(element));
    }

