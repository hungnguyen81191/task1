
const [SUN, MON, TUE, WED, THU, FRI, SAT] = [0, 1, 2, 3, 4, 5, 6]; // Destructing assignment
const DAY_STR = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];






const HOLIDAY_LIST = [
    "2022-04-09",
    "2022-04-10",
    "2022-04-11",
    "2022-04-30",
    "2022-05-01",
    "2022-05-02",
    "2022-05-03",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04"
];

// const DAY_OFF_LIST = [
//     "2022-04-05"
// ]

let lessons_list = [
    "Bài 1. Nhập môn tư duy lập trình - Lý thuyết",
    "Bài 2. Nhập môn tư duy lập trình - Thực hành",
    "Bài 3. Quản lý mã nguồn với Git - Thực hành",
    "Bài 4. Cách tạo một trang web - Lý thuyết",
    "Bài 5. Cách tạo một trang web - Thực hành",
    "Bài 6. Biến, kiểu dữ liệu và toán tử - Lý thuyết",
    "Bài 7. Biến, kiểu dữ liệu và toán tử - Thực hành",
    "Bài 8. Cơ bản về HTML DOM - Lý thuyết",
    "Bài 9. Cơ bản về HTML DOM - Thực hành",
    "Bài 10. Cấu trúc điều kiện - Lý thuyết",
    "Bài 11. Cấu trúc điều kiện - Thực hành",
    "Bài 12. Cấu trúc lặp - Lý thuyết",
    "Bài 13. Cấu trúc lặp - Thực hành",
    "Bài 14. Cấu trúc lặp - Thực hành",
    "Bài 15. Mảng - Lý thuyết",
    "Bài 16. Mảng - Thực hành",
    "Bài 17. Mảng - Thực hành",
    "Bài 18. Hàm - Lý thuyết",
    "Bài 19. Hàm - Thực hành",
    "Bài 20. Hàm - Thực hành",
    "Bài 21. Canvas - Lý thuyết + Thực hành",
    "Bài 22. Lớp và Đối tượng - Lý thuyết",
    "Bài 23. Lớp và Đối tượng - Thực hành",
    "Bài 24. Lớp và Đối tượng - Thực hành",
    "Bài 25. Thuật toán - Lý thuyết + Thực hành",
    "Bài 26. Case Study - Lý thuyết",
    "Bài 27. Case Study - Thực hành",
    "Bài 28. Case Study - Thực hành",
    "Bài 29. Thi cuối khóa và bảo vệ Case Study",
    "Bài 30. Tổng kết"
];


function isOverDate(current_date){
    if (current_date.getMonth()==2 && current_date.getDate()>28 | month31.includes(current_date.getMonth()) && current_date.getDate()>31 | 
    month30.includes(current_date.getMonth()) && current_date.getDate()>30) {
        return true;
    }return false;
}




function takeSchedule(current_date, study_day) {
    let i = 0;
    let text = "";
    let next_date;
    //let day;
    let schedules = [];
    let month31 = [1, 3, 5, 7, 8, 10, 12];
    let month30 = [4, 6, 9, 11]
    
   do {
      // console.log(1);
        text = current_date.toISOString().substring(0,10);
        next_date = new Date();
        next_date.setDate(current_date.getDate()+1);
        if (isOverDate(current_date)) {

            next_date.setMonth(current_date.getMonth() + 1);

        } else {
            next_date.setMonth(current_date.getMonth());
        }

        //khong can khi nhap day
        day = next_date.getDay();
        //console.log(day);
        if (!HOLIDAY_LIST.includes(text) && study_day.includes(day)) {
            
            schedules[i] = text + " " + lessons_list[i];
           // console.log(2)
            i++;
            
        }

        current_date = next_date;
        //console.log(3);
        continue;
   } while (i< lessons_list.length);
   return schedules;
}


var current = new Date("2022-04-03");

// console.log(current.getDate());
console.log(takeSchedule(current, [2, 3, 5]));