let girl = [
    {
        surname: 'Nguyễn Đức',
        name: 'Tùng',
        img: 'img/tung.jpg',
        desc: 'Đăng nhập, Đăng kí'
    },
    {
        surname: 'Nguyễn',
        name: 'Quỳnh Anh',
        img: 'img/qa.jpg',
        desc:'Tìm kiếm api, Footer, Trang giới thiệu các thành viên, Chỉnh sửa lại giao diện'
    },
    {
        surname: 'Đỗ Tuấn',
        name: 'Dũng',
        img: 'img/dung.jpg',
        desc:'CRUD để tạo/xử lý thông tin sản phẩm'
    },
    {
        surname: 'Ngô Ngọc',
        name: 'Tâm',
        img: 'img/tam.jpg',
        desc:'Xử lý data, Xử lý tổng giao diện'
    },
];
let picture = document.querySelectorAll('.effect-sarah');
picture.forEach((element, index) => {
    element.lastElementChild.firstElementChild.prepend(girl[index].surname + ' ');
    element.lastElementChild.firstElementChild.firstElementChild.innerText = girl[index].name;
    element.firstElementChild.src = girl[index].img;
    element.addEventListener('click', () => {
        Swal.fire({
            title: `<h2 class="name">${girl[index].surname} ${girl[index].name}<h2>`,
            html: 
            `<p class="desc">${girl[index].desc}</p>`
            ,
            
            padding: '1em',
            background: '#fff url(/images/trees.png)',
            
            
        
        })
    })
})




