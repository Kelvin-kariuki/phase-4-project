puts "🌱 Seeding spices..."
Tender.destroy_all

# Company.destroy_all

Tender.create!(name:"Maintenance support and licenses for network systems for central bank of Kenya", serial: "INV/00052/FTST", description: "Completed tender documents are to be enclosed in plain sealed envelopes marked with tender reference number and be deposited in the Green Tender Box No. 3 at the main entrance, ground floor of Central Bank of Kenya along Haile Selassie Avenue, so as to be received on or before 4th April 2022 at 10.30 A.M.",cost: "2000")
Tender.create!(name:"Maintenance support and licenses for network systems for central bank of Kenya", serial: "INV/00053/FTST", description: "Completed tender documents are to be enclosed in plain sealed envelopes marked with tender reference number and be deposited in the Green Tender Box No. 3 at the main entrance, ground floor of Central Bank of Kenya along Haile Selassie Avenue, so as to be received on or before 4th April 2022 at 10.30 A.M.",cost: "2000")
# u1=Company.create!(name:"World Vision",email:"Kariuki405@gmail.com", tender_id:t1.id)
# u2=Company.create!(name:"Kenyatta Hospital",email:"ruomungai@gmail.com",tender_id:t2.id)



puts "✅ Done seeding!"