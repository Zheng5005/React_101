const dummyAPIResponse = {
  showAccordion: true,
  showRandomColorGenerator: true,
  showStarRating: true,
  showImageSilder: true,
  showLoadMore: true,
  showTreeView: true,
  showQRCodeGenerator: false,
  showLightAndDarkmode: true,
  showScroll: false,
  showTabs: true,
  showModal: true,
  showProfile: true,
  showSearch: true
};

function featuresFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
    else reject("Some error ocurred!");
  });
}

export default featuresFlagsDataServiceCall;
