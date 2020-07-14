function hascollided(lbullet,lwall) {
    bulletRightEdge=lbullet.x+lbullet.weight;
    wallLeftEdge= lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
  }