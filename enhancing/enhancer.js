module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancements !== 20) {
    return { ...item, enhancements: item.enhancements + 1 };
  } else {
    return { ...item }
  }
}

function fail(item) {
  let updatedItem;
  if(item.enhancements < 15) {
    updatedItem = { ...item, enhancements: item.enhancements - 5 }
  } else if (item.enhancements > 16) {
    updatedItem = { ...item, enhancements: item.enhancements - 1 }
  } else if (item.enhancements > 15) {
    updatedItem = { ...item, enhancements: item.enhancements - 10 }
  }

  if(updatedItem.enhancements < 0) {
    return { ...updatedItem, enhancements: 0 }
  } else {
    return updatedItem;
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if(item.enhancements > 0) {
    return { ...item, name: `[+${item.enhancements}]${item.name}`};
  } else {
    return { ...item }
  }
};