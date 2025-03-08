function talk() {
  var know = {
    Hii: "Hello, I am Mr.Cure! ",
    "how are you": "Good :)",
    "shall i share my symptoms?":
      "Please Give us Details.I am here to help! :D",
    "Your followers":
      "I have my family of 5000 members,have supportive Family ",

    fever:
      "Drink plenty of fluids to stay hydrated.Dress in lightweight clothing.	Use a light blanket if you feel chilled, until the chills end.Take acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). Follow the directions on the label. :)",
    anxiety:
      "Take care of your body by eating a well-balanced diet. ...Limit alcohol, caffeine, and sugar consumption.Take time out for yourself every day. ...Trim a hectic schedule to its most essential items, and do your best to avoid activities you don't find relaxing.Keep an anxiety journal.",
    "high bp":
      "Eat a Healthy Diet. Choose healthy meal and snack options to help you avoid high blood pressure and its complications Keep Yourself at a Healthy Weight Be Physically Active Do Not Smoke Limit How Much Alcohol You Drink Get Enough Sleep. ",
    "low bp":
      "Drink more water, less alcohol. Alcohol is dehydrating and can lower blood pressure, even if drinking in moderation. ... Pay attention to body positions Gently move from lying flat or squatting to a standing position. ",
    cold:
      "Wash your hands often with soap and water. Wash them for 20 seconds, and help young children do the same Avoid touching your eyes, nose, and mouth with unwashed hands Stay away from people who are sick.",
    tb:
      "Reduce exposure by eliminating or delaying nonurgent appointments for patients with suspect or infectious TB until infectiousness is ruled out or resolves.",
    cramp:
      "Take a warm bath.Hold a hot water bottle or heating pad over the cramp zone. Relax with gentle exercise, such as stretching.Eat healthy foods.",
    "why i am slim?":
      "Low body weight is due to a variety of causes, including: Genetics. If you've been thin since high school and it runs in your family, it's likely that you were born with a higher-than-usual metabolism. You also may have a naturally small appetite",
    "why i am fat?":
      "It's caused when extra calories are stored in the body as fat. If you consume high amounts of energy, particularly found in high fat and high sugar foods, and do not use all of the energy through physical activity, much of the extra energy will be stored in the body as fat. ",
    "loose motions":
      "Eat some salty foods, such as pretzels, soup, and sports drinks. Eat some high potassium foods, such as bananas, potatoes without the skin, and fruit juices",
    cough:
      "Cover your mouth and nose with a tissue when you cough or sneeze. Throw used tissues in the trash. If you don't have a tissue, cough or sneeze into your elbow, not your hands.",
    "Tips for healthy life":
      "Be physically active for 30 minutes most days of the week.Eat a well-balanced, low-fat diet with lots of fruits, vegetables and whole grains.",
    thankyou: "Thank You So Much Take care ",
    "who are your creator": "Its Mahek and Harshvi :D",
    ok: "Thank You So Much ",
    Bye: "Okay! Will meet soon.."
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Sorry,I didn't understand <br>";
  }
}
