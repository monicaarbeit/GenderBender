//credit: https://github.com/panicsteve/cloud-to-butt/

walk(document.body);

function walk(node)  
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
    console.log(v);

    // personal pronouns 
    v = v.replace(/\bshe\b/g, "they");
    v = v.replace(/\bShe\b/g, "They");
    v = v.replace(/\bshe is\b/g, "they are");
    v = v.replace(/\bShe is\b/g, "They are");
    v = v.replace(/\bshe was\b/g, "they were");
    v = v.replace(/\bShe was\b/g, "They were");
    v = v.replace(/\bher\b/g, "their");
    v = v.replace(/\bHer\b/g, "Their");
    v = v.replace(/\bhe\b/g, "they");
    v = v.replace(/\bHe\b/g, "They");
    v = v.replace(/\bhe\b/g, "they are");
    v = v.replace(/\bHe\b/g, "They are");
    v = v.replace(/\bhe\b/g, "they were");
    v = v.replace(/\bHe\b/g, "They were");
    v = v.replace(/\bhim\b/g, "them");
    v = v.replace(/\bHim\b/g, "Them");
    v = v.replace(/\bhimself\b/g, "themself");
    v = v.replace(/\bHimself\b/g, "Themself");
    v = v.replace(/\bherself\b/g, "themself");
    v = v.replace(/\bHerself\b/g, "Themself");

    //contractions 
    v = v.replace(/\bhe's\b/g, "they're");
    v = v.replace(/\bHe's\b/g, "They're");
    v = v.replace(/\bshe's\b/g, "they're");
    v = v.replace(/\bShe's\b/g, "They're");


    //possisive pronouns 
    v = v.replace(/\bhers\b/g, "theirs");
    v = v.replace(/\bHers\b/g, "Theirs");
    v = v.replace(/\bhis\b/g, "their");
    v = v.replace(/\bHis\b/g, "Their");

    //nouns 
    v = v.replace(/\bman\b/g, "person");
    v = v.replace(/\bMan\b/g, "Person");
    v = v.replace(/\bmen\b/g, "people");
    v = v.replace(/\bMen\b/g, "People");
    v = v.replace(/\bwoman\b/g, "person");
    v = v.replace(/\bWoman\b/g, "Person");
    v = v.replace(/\bwomen\b/g, "people");
    v = v.replace(/\bWomen\b/g, "People");
    v = v.replace(/\bgirl\b/g, "person");
    v = v.replace(/\bGirl\b/g, "Person");
    v = v.replace(/\bgirls\b/g, "people");
    v = v.replace(/\bGirls\b/g, "People");
    v = v.replace(/\bboy\b/g, "person");
    v = v.replace(/\bBoy\b/g, "Person");
    v = v.replace(/\bboys\b/g, "people");
    v = v.replace(/\bBoys\b/g, "People");
    v = v.replace(/\bguy\b/g, "person");
    v = v.replace(/\bGuy\b/g, "Person");
    v = v.replace(/\bguys\b/g, "people");
    v = v.replace(/\bGuys\b/g, "People");
    v = v.replace(/\bladies\b/g, "people");
    v = v.replace(/\bLadies\b/g, "People");


    v = v.replace(/\bdude\b/g, "person");
    v = v.replace(/\bDude\b/g, "Person");
    v = v.replace(/\bgal\b/g, "person");
    v = v.replace(/\bGal\b/g, "Person");
    
    v = v.replace(/\b([Ff]e)?[Mm]ale\b/g, " "); /* replace female, male with blank */


    //relational nouns
    v = v.replace(/\bdaughter\b/g, "child");
    v = v.replace(/\bDaughter\b/g, "Child");
    v = v.replace(/\bdaughters\b/g, "children");
    v = v.replace(/\bDaughters\b/g, "Children");
    v = v.replace(/\bson\b/g, "child");
    v = v.replace(/\bSon\b/g, "Child");
    v = v.replace(/\bsons\b/g, "children");
    v = v.replace(/\bSons\b/g, "Children");

    v = v.replace(/\bwife\b/g, "spouse");
    v = v.replace(/\bWife\b/g, "Spouse");
    v = v.replace(/\bhusband\b/g, "spouse");
    v = v.replace(/\bHusband\b/g, "Spouse");
    v = v.replace(/\bgirlfriend\b/g, "partner");
    v = v.replace(/\bgirlfriends\b/g, "partners"); /* can also sometimes be friends */
    v = v.replace(/\bGirlfriend\b/g, "Partner");
    v = v.replace(/\bGirlfriends\b/g, "Partners");
    v = v.replace(/\bboyfriend\b/g, "partner");
    v = v.replace(/\bboyfriends\b/g, "partners");
    v = v.replace(/\bBoyfriend\b/g, "Partner");
    v = v.replace(/\bBoyfriends\b/g, "Partners");

    v = v.replace(/\bmother\b/g, "parent");
    v = v.replace(/\bmothers\b/g, "parents");
    v = v.replace(/\bMother\b/g, "Parent");
    v = v.replace(/\bMothers\b/g, "Parents");
    v = v.replace(/\bmom\b/g, "parent");
    v = v.replace(/\bMom\b/g, "Parent");
    v = v.replace(/\bmoms\b/g, "parents");
    v = v.replace(/\bMoms\b/g, "Parents");
    v = v.replace(/\bfather\b/g, "parent");
    v = v.replace(/\bfathers\b/g, "parents");
    v = v.replace(/\bFather\b/g, "Parent");
    v = v.replace(/\bFathers\b/g, "Parents");
    v = v.replace(/\bdad\b/g, "parent");
    v = v.replace(/\bDad\b/g, "Parent");
    v = v.replace(/\bdads\b/g, "parents");
    v = v.replace(/\bDads\b/g, "Parents");

    v = v.replace(/\bgrandmother\b/g, "grandparent");
    v = v.replace(/\bgrandmothers\b/g, "grandparents");
    v = v.replace(/\bGrandmother\b/g, "Grandparent");
    v = v.replace(/\bGrandmothers\b/g, "Grandparents");
    v = v.replace(/\bgrandfather\b/g, "grandfather");
    v = v.replace(/\bgrandfathers\b/g, "grandparents");
    v = v.replace(/\bGrandfather\b/g, "Grandfather");
    v = v.replace(/\bGrandfathers\b/g, "Grandparents");

    v = v.replace(/\baunt\b/g, "relative");
    v = v.replace(/\baunts\b/g, "relatives");
    v = v.replace(/\bAunt\b/g, "Relative");
    v = v.replace(/\bAunts\b/g, "Relatives");
    v = v.replace(/\buncle\b/g, "relative");
    v = v.replace(/\buncles\b/g, "relatives");
    v = v.replace(/\bUncle\b/g, "Relative");
    v = v.replace(/\bUncles\b/g, "Relatives");

    v = v.replace(/\bniece\b/g, "relative");
    v = v.replace(/\bnieces\b/g, "relatives");
    v = v.replace(/\bNiece\b/g, "Relative");
    v = v.replace(/\bNieces\b/g, "Relatives");
    v = v.replace(/\bnephew\b/g, "relative");
    v = v.replace(/\bnephews\b/g, "relatives");
    v = v.replace(/\bNephew\b/g, "Relative");
    v = v.replace(/\bNephew\b/g, "Relatives");

    v = v.replace(/\bsister\b/g, "sibling");
    v = v.replace(/\bsisters\b/g, "siblings");
    v = v.replace(/\bSister\b/g, "Sibling");
    v = v.replace(/\bSisters\b/g, "Siblings");
    v = v.replace(/\bbrother\b/g, "sibling");
    v = v.replace(/\bbrothers\b/g, "siblings");
    v = v.replace(/\bBrother\b/g, "Sibling");
    v = v.replace(/\bBrothers\b/g, "Siblings");
   
    //prefixes -- not sure if these are working
    v = v.replace(/\bMr\.?b/g, "Mx");
    v = v.replace(/\bMrs\.?b/g, "Mx");
    v = v.replace(/\bMs\.?b/g, "Mx");
    v = v.replace(/\bMiss\.?b/g, "Mx");
    v = v.replace(/\bMister\.?b/g, "Mx");
    v = v.replace(/\bSir/g, "Honorary");
    v = v.replace(/\bMadam/g, "Honorary");

    //other general nouns 
    v = v.replace(/\bcongressman\b/g, "congressperson");
    v = v.replace(/\bCongressman\b/g, "Congressperson");
    v = v.replace(/\bcongresswoman\b/g, "congressperson");
    v = v.replace(/\bCongresswoman\b/g, "Congressperson");
    
    v = v.replace(/\bqueen\b/g, "monarch");
    v = v.replace(/\bQueen\b/g, "Monarch");
    v = v.replace(/\bqueens\b/g, "monarchs");
    v = v.replace(/\bQueens\b/g, "Monarchs");
    v = v.replace(/\bking\b/g, "monarch");
    v = v.replace(/\bKing\b/g, "Monarch");
    v = v.replace(/\bkings\b/g, "monarchs");
    v = v.replace(/\bKings\b/g, "Monarchs");

    v = v.replace(/\bprince\b/g, "monarch's child");
    v = v.replace(/\bPrince\b/g, "Monarch's Child");
    v = v.replace(/\bprinces\b/g, "monarch's children");
    v = v.replace(/\bPrinces\b/g, "Monarch's Children");

    v = v.replace(/\bprincess\b/g, "monarch's child");
    v = v.replace(/\bPrincess\b/g, "Monarch's Child");
    v = v.replace(/\bprincesses\b/g, "monarch's children");
    v = v.replace(/\bPrincesses\b/g, "Monarch's Children");

    v = v.replace(/\bmankind\b/g, "humankind");
    v = v.replace(/\bMankind\b/g, "Humankind");
    v = v.replace(/\bchairman\b/g, "chairperson");
    v = v.replace(/\bChairman\b/g, "Chairperson");
    v = v.replace(/\bchairwoman\b/g, "chairperson");
    v = v.replace(/\bChairwoman\b/g, "Chairperson");
    v = v.replace(/\bchairmen\b/g, "chairpeople");
    v = v.replace(/\bChairmen\b/g, "Chairpeople");
    v = v.replace(/\bChairwomen\b/g, "Chairpeople");

    v = v.replace(/\bgunman\b/g, "gunperson");
    v = v.replace(/\bGunman\b/g, "Gunperson");
    v = v.replace(/\bgunwoman\b/g, "gunperson");
    v = v.replace(/\bGunwoman\b/g, "Gunperson");

    v = v.replace(/\balumnae\b/g, "alumnus");
    v = v.replace(/\bAlumnae\b/g, "Alumnus");
    v = v.replace(/\bwaitress\b/g, "waiter");
    v = v.replace(/\bWaitress\b/g, "Waiter");
    v = v.replace(/\bactress\b/g, "actor");
    v = v.replace(/\bActress\b/g, "Actor");
    v = v.replace(/\bhostess\b/g, "host");
    v = v.replace(/\bHostess\b/g, "Host");

    v = v.replace(/\bfreshman\b/g, "first-year student");
    v = v.replace(/\bFreshman\b/g, "First-year student");
    v = v.replace(/\b"man-made"\b/g, "synthetic");
    v = v.replace(/\b"Man-made"\b/g, "Synthetic");

    v = v.replace(/\b"policeman"\b/g, "police officer");
    v = v.replace(/\b"Policeman"\b/g, "Police officer");
    v = v.replace(/\b"policewoman"\b/g, "police officer");
    v = v.replace(/\b"Policewoman"\b/g, "Police officer");

    v = v.replace(/\b"nun"\b/g, "clergyperson");
    v = v.replace(/\b"nuns"\b/g, "clergypeople");
    v = v.replace(/\b"Nun"\b/g, "clergyperson");
    v = v.replace(/\b"Nuns"\b/g, "clergypeople");

    v = v.replace(/\b"bride"\b/g, "newlywed");
    v = v.replace(/\b"brides"\b/g, "newlyweds");
    v = v.replace(/\b"Bride"\b/g, "Newlywed");
    v = v.replace(/\b"groom"\b/g, "newlywed");
    v = v.replace(/\b"groom"\b/g, "newlyweds");
    v = v.replace(/\b"Groom"\b/g, "Newlywed");

    textNode.nodeValue = v;
}