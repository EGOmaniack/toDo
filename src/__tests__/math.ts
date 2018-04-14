import { randomInteger } from "../app/helpers/math";

describe('Проверка получения случайного числа в диапозоне', function(){

    it ("сгенерирует случайное число в указанном диапазоне",function(){
        for(let i = 0; i < 20; i++) {
            expect(randomInteger(1011,2000))
                .toBeGreaterThanOrEqual(1011);
            expect(randomInteger(1,999))
                .toBeLessThanOrEqual(999);
        }
    });
});