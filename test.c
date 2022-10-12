int main()
{
int p,a[100],sum=0,i=0;
scanf("%d",&p);
while(p>0);
{
    i=i+1;
a[i]=sum*10+(p%10);
p=p/10;
}
for(i=0;i<4;i++)
{
    printf("%d",a[i]);
}
}