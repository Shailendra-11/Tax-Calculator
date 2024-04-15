const Form = document.querySelector("#form");
const BtnSubmit = document.querySelector("#btn-sumbit");
const Error = document.querySelector('.error');
const incomeError = document.querySelector('#incomeError')
const ageError = document.querySelector('#ageError')
const deductionsError = document.querySelector('#deductionsError')

const result = document.querySelector('.result')
const mainheading = document.querySelector('.main-heading')
const subheading = document.querySelector('.sub-heading')
const content = document.querySelector('.content')
const tax =document.querySelector('.tax')
const resultbtn =document.querySelector('.result-btn')



Form.addEventListener('click', function (e) {
   e.preventDefault()
   const AnnulIncome = parseFloat(document.querySelector('#annul-income').value);
   const Extraincome = parseFloat(document.querySelector('#extra-income').value);
   const Age = parseInt(document.querySelector('#age').value);
   const Deduction = parseFloat(document.querySelector('#total').value);


   (isNaN(AnnulIncome) || AnnulIncome <= 0) ? Error.style.display = 'block' : Error.style.display = 'none';
   (isNaN(Extraincome) || Extraincome <= 0) ? incomeError.style.display = 'block' : incomeError.style.display = 'none';
   (isNaN(Age) || Age <= 0) ? ageError.style.display = 'block' : ageError.style.display = 'none';
   (isNaN(Deduction) || Deduction <= 0) ? deductionsError.style.display = 'block' : deductionsError.style.display = 'none';


   const CalculatorTax = (AnnulIncome, Extraincome, Deduction, Age) => {
      if (AnnulIncome <= 600000) {
         const Taxed = AnnulIncome + Extraincome - Deduction;
         mainheading.innerText = 'Your overall income will be'
         subheading.innerText = `${AnnulIncome}`
         content.innerText = `after tex deduction `
         tax.innerText = `${0}`
      }
      else if(AnnulIncome<=800000) {
         const Taxed = AnnulIncome + Extraincome - Deduction;
         mainheading.innerText = 'Your overall income will be'
         subheading.innerText = `${AnnulIncome}`
         content.innerText = `after tex deduction  `
         tax.innerText = `${Taxed}`
      }
      else if (AnnulIncome>800000 &&  Age<=40) {
        const Tax = 0.3*(AnnulIncome-800000)
        mainheading.innerText = 'Your overall income will be'
        subheading.innerText = `${AnnulIncome}`
        content.innerText = `after tax  deduction`
        tax.innerText = `${Tax}`
      }
      else if (AnnulIncome>=800000 &&  Age>=40 && Age<=60) {
        const Tax = 0.4*(AnnulIncome-800000)
        mainheading.innerText = 'Your overall income will be'
        subheading.innerText = `${AnnulIncome}`
        content.innerText = `after tax  deduction`
        tax.innerText = `${Tax}`
      }
      else if (AnnulIncome>=800000 &&  Age>=60) {
         const Tax = 0.1*(AnnulIncome-800000)
         mainheading.innerText = 'Your overall income will be'
         subheading.innerText = `${AnnulIncome}`
         content.innerText = `after tax  deduction`
         tax.innerText = `${Tax}`
       }


   }
   CalculatorTax(AnnulIncome, Extraincome, Deduction, Age)
})


BtnSubmit.addEventListener('click' , (e) => {
   result.style.display = 'block'
   
})

resultbtn.addEventListener('click' , (e)=>{
   result.style.display = 'none'
})



