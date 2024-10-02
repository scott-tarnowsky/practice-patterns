///////////////////////////////

Starting at the Root

Check if there is a root, if not - done searching
If there is root, check if the value of the new node is the value we are looking for
If we found it, we're done
If not, check to see if value is greater or less than value of root
If greater
    Check to see if there is node to right
        If there is, move to that node and repeat steps
        If there is not, we're done searching
    If less
        Check to see if there is node to the left
            If true, move to that node and repeat steps
            If not, we're done searching
            