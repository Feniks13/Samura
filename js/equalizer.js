function EqualizeColumns(BlockClass) {
  setTimeout(function() {
      var Blocks = document.getElementsByClassName(BlockClass);
      var maxHeight = 0;
      for (var i = 0; i < Blocks.length; ++i) {
	Blocks[i].style.height = "auto";
        if (maxHeight < Blocks[i].clientHeight) {
          maxHeight = Blocks[i].clientHeight; 
        }
      }
      for (var i = 0; i < Blocks.length; ++i) {
        Blocks[i].style.height = maxHeight + "px";
      }
    }, 1);
}