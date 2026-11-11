function ai(e, t) {
  if (e.tag === 5 || (ml && e.tag === 27)) Jr(e, t)
  else if (e.tag !== 4 && ((e = e.child), e !== null))
    for (ai(e, t), e = e.sibling; e !== null;) (ai(e, t), (e = e.sibling))
}
