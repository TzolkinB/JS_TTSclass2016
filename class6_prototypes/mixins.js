// Write a function getProfileUpdate() that hypothetically asks the user to update some profile properties and returns information about which properties were changed, and to what values.(for now, just hard code the return value)
// Write a function updateProfile() that takes a single object of keys:values and overwrites those keys on the profile object
// Get a profile update and update the profile with it.
// log the new profile


var profile = {
  name: "Kim",
  address: "Home",
  city: "Greensboro",
  state: "NC",
  zipcode: "12345",
  avatar: "image",
};

console.log(profile);

function getProfileUpdate() {
  console.log("Did you move?");
  var updatedData = { city: "Charlotte" };
  return updatedData;
}

function updateProfile(newProfile) {
 var newProfileData = Object.assign(newProfile,getProfileUpdate());
 return newProfileData;
}

updateProfile(profile);

//check that the object's been modified
console.log(profile);
